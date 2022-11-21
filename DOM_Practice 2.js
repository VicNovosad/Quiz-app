  /*
            Ready to write some DOM code?

            PART I:
            Let's start simple, 
                1. USING JAVASCRIPT, create a <div> element
                2. add the "container" class
                3. append as a child, to the body

            Let's fill that container
                1. USING JAVASCRIPT create 3 <p> elements
                2. fill them with the text...
                    [1] "Yesterday was good" [2] "Today is great" [3] "Tomorrow will be better"
                3. append them as children, to the "container" above

            Now, REFACTOR (update) the code above to use forEach on this array of strings:
                var copy = ["Yesterday was good", "Today is great", "Tomorrow will be better"];
        */

        const container = document.createElement('div');
        container.classList.add('container');
        document.body.append(container);

        const text = ["Yesterday was good", "Today is great", "Tomorrow will be better"];

        text.forEach(paragraph => {
            var myP = document.createElement('p');
            myP.textContent = paragraph;
            myP.classList.add('text-paragraph');
            container.appendChild(myP);
        });
        

        /*
            PART II:
            Start by creating another element
                1. create a button element
                2. set its text to be "enable dark mode"
                3. set style: 15px padding, no border, "black" background, "white" (text) color -- CAN YOU DO THIS WITH A LOOP?
                4. append as a child, to the "container" class div
        */

        const colors = {
            index: 0,
            colorPalette: [ 'white', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'black' ],
            color: "white",
        
            setColor: function (color) {
                color ? (this.index = color) : (index = 0);
                return this.colorPalette[this.index];
            },
        
            nextColor: function () {
                this.index < 8 ? this.index++ : (this.index = 0);
                this.color = this.colorPalette[this.index];
                return this;
            },
        
            previousColor: function () {
                index > 0 ? index-- : (index = 8);
                this.color = this.colorPalette[this.index];
                return this;
            }
        }

        // document.body.appendChild( document.createElement('button') )
        const button = document.createElement('button');
        container.append(button);
        const defaultButtonStyle = {
            padding: '15px',
            border: 'none',
            background: 'black',
            color: 'white'
        }

        function defaultMode() {
            document.body.style.background = 'white';
            // cssText styling in one line
            container.style.cssText = "background: white; color: black"
            button.textContent = 'Enable dark mode';
            // css styles taking from loop through the defaultButtonStyle object
            for (const key in defaultButtonStyle) {
                button.style[key] = defaultButtonStyle[key];
            }
            return 'default'
        };

        let mode = defaultMode();

                  /*  
            Ready to write an event listener?
                1. add a click event listener to the black button
                2. inside the 'click' function, write code that...
                    - changes the background color of the html "body" to "black"
                    then, 
                    - change the background of ".container" to "#777" and color to white
                    - change the button text to black, and the background to white
         */
        function darkMode() {
            document.body.style.background = 'black';
            container.style.cssText = "background: #777; color: white;";
            button.style.cssText = "color: black; background: white; padding: 15px; border: none;";
            button.textContent = 'Enable white mode';
            return 'dark'
        };
    
        

        button.addEventListener('click', function() {
            if (mode === 'dark') {
                mode = defaultMode();
            } else {
                mode = darkMode();
            }
        });

         /*
            BONUS (CHALLENGING): 
            Once dark mode is enabled, can you write code to switch it back to light mode?
                HINT #1: create a boolean variable that indicates whether dark mode is active
                HINT #2: use this for an if statement inside your event listener
                HINT #3: change the button text as well, depending on the state
        */