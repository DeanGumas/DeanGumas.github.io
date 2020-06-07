## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/DeanGumas/DeanGumas.github.io/edit/master/index.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/DeanGumas/DeanGumas.github.io/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.

<!-- Open template.js, paste your Program into the commented part and
Save As NameOfProgram.js
then at the bottom of this page, change
<script src="template.js"></script>  to
<script src="NameOfProgram.js"></script>
and Save as NameOfProgram.html -->

<!DOCTYPE html>
<!-- start of the document -->
<html>
 <!-- The header. Information here doesn't make up elements of the webpage. We'll define all the javascript stuff at the end, so we just put the title here. -->
 <head>
 <!-- Title to be displayed in browser -->
    <title>Dean Gumas</title>
</head>

 <!-- The body of the webpage, where all visible stuff lies. -->
 <body style="background-color:#383838">
   <h1 align="center" style="font-family:verdana"> Dean Gumas </h1>
    <p align="center" style="font-family:verdana">
	<!--This draws the Canvas on the webpage -->
      <canvas id="mycanvas"></canvas>
    </p>
 </body>


 <!-- run all the JavaScript stuff -->
 <!-- Include the processing.js library -->
 <script src="processing-1.4.8.min.js"></script>

 <!-- The name of the Program Source Code goes here -->
 <script src="final_project.js"></script>

 <script type="application/javascript">
  //get the canvas that Processing-js will use
  var canvas = document.getElementById("mycanvas");
  //pass the function sketchProc (defined in myCode.js) to Processing's constructor.
  var processingInstance = new Processing(canvas, sketchProc);
 </script>

</html>
