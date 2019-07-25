### Data Visualisation 📊📊📊

The final project is viewable [here](https://lisonallie.github.io/js-datavisualisation-challenge/).

#### What was the project about? 🔍🔍🔍
I received an assignment to incorporate graphs into an already-provided website. The source code files are everything in the assets folder and were provided for me. The `index.html` was also provided for me. I was not allowed to change anything in the HTML except to add scripts.

#### The Objective 👷👷👷
The objective was to use JavaScript to manipulate the DOM and place 3 charts in specific places using chart.js. I used the data from the tables provided to fill said charts using `for` loops. The first chart is an interactive chart that should be updating every second, but due to limitations with the CORS proxy CORS Anywhere, I limited the chart visibility to once per reload. If you reload the page it will refresh, but CORS Anywhere limits its requests to 200 per 60 minutes.

#### What I Learned 📝📝📝
I learned a few things!
- How to pull data from a table and select individual cells and rows with a combination of `for` loops and write the data elsewhere.
- How to create your own `JSON` file and reference the code using your own hosted server.
- How to use chart.js to convey data visually.
- Using AJAX to access a proxy and connect it to a URL.
- How to add a json variable and implement it where needed.
- How to add a random RGB function and manipulate it to get different colors.

#### Project Objectives Checklist ⚙️⚙️⚙️
(from the original github [repository](https://github.com/becodeorg/ANT-Giertz-1-11/tree/master/2.The-Hills/Data-Viz))

#### 1. handling of the DOM:

-    [x] I was able to find the right selector to do it.
-    [x] I was able to inject the graph in the right place on the page via javascript.
-    [x] I was able to retrieve the html data in a format adapted to my javascript code.

### 2. Request ajax:

-    [x] I was able to receive the answer from the remote server in json.
-    [x] Then, I was able to build a callback function to process this data.

### 3. Use of **third party libraries**:

-    [x] I was able to integrate the third-party library into my application.
-    [x] I used the documentation provided by the library.
-    [x] I was able to generate the 2 inline data graphs.
-    [x] I was able to generate the "remote data" graph.

### 4. Problem-solving:

-    [x] Syntactic rigor: I was able to translate the processes I imagined into javascript syntax.
-    [x] Logical thinking: Through iterations and trial and error, I was able to find a logical path that works to address the issues raised by the client's request. Specifically:
     -    [x] I was able to generate the 2 inline data graphs. - [x] I was able to generate the "remote data" graph.
     -    [x] I was able to build a callback function to process remote data (received via ajax). - [x] I was able to make the realtime graph refresh in real time. - [x] I was able to display the detailed data when I hover the mouse.

### 5. Debugging:

-    [x] I use the console to understand what is happening and compare what I am trying to program with what the machine is doing.

### 6. Separation of concerns:

-    [x] If I disable javascript, the user experience is satisfactory, the user has access to data and content
-    [x] If I enable javascript, the tables are enhanced with an interactive graph.

***Disclaimer***
Errors in the console are from the code in the files that were provided and I was not permitted to fix them.