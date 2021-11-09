# Football Quiz

![Football Quiz Images](assets/test-file/am-i-responsive.PNG)

[View the live project here](https://preetbhullar90.github.io/html-css-repository/)

## Contents
1. [Introduction](#Introduction)

2. [User Experience](#User-Experience) 
   
3. [Target](#Target)
   
4. [Design](#Design)
  
5. [Features](#Features)

6. [Bugs](#Bugs) 

7. [Other Features](#Other-Features)

8. [Features Left to Implement](#Feature-Left-to-Implement)

9. [Technologies Used](#Technologies-Used)
  
10. [Frameworks Libraries and Programs Used](#Frameworks-Libraries-and-Programs-Used)   

11. [Testing](#Testing)

    - [Testing.md](assets/testing-file/testing.md)

12. [Deployment](#Deployment)

13. [Make a clone](#Make-a-clone)

14. [Credit](#Credit)

15. [Acknowledgements](#Acknowledgements)
***

## Introduction

This game is designed for football lovers.
The focus of this game is to build your knowledge about football and to test the players knowledge about the history of this sport including information about the players, goals and won games.
This game consists of ten multiple choice questions with a choice of four answers. The purpose of the site is to test your knowledge and to learn some new facts about football.
This is my second project out of five milestones projects which students are required to complete in this full stack software development course from Code Institute.
The main programming language I used for this project is HTML, CSS and JAVASCRIPT. It was essential to ensure that this site was responsive on all the devices. 

[Go Top](#Football-Quiz)

## User Experience

### Ideal User Demographic
* New football fans. 
* Current football fans.

### User Stories

#### New football fans :
* As a new player, I want this game to be responsive on all devices.
* As a new player, I want instructions about how to play the game.
* As a new player, I want to see multiple answer choices for each question.
* As a new player, I want to what question I am currently on in the quiz.

#### Current football fans :
* As a Current player, I want to see different questions every time.
* As a Current player, I want to give feedback for the game.

[Go Top](#Football-Quiz)

## Target
* On every game page I added a background of a football pitch with a goal post, I did this so users can easily understand this game is about football players or football history. 
* I added a score tracker for each question. When a player plays this game, he can see the right or wrong answer before the final result.
 This encourages players finish the game to see their final result. 

#### Skeleton
* I used [Figma](https://www.figma.com/file/3CPjEZJrlwFCZhLZUp3eRe/javascript-p2?node-id=0%3A1) Wireframe to attach the following pages:

#### Desktop-Starting-Page
 ![](assets/readme-files/desktop-1.png)

#### Tablet-Starting-Page
![](assets/readme-files/tablet-1.png)

#### Mobile-Starting-Page
![](assets/readme-files/mobile-1.png)


#### Desktop-Questions-Answers-Page
![](assets/readme-files/desktop-2.png)

#### Tablet-Questions-Answers-Page
![](assets/readme-files/tablet-2.png)

#### Mobile-Questions-Answers-Page
![](assets/readme-files/mobile-2.png)


#### Desktop-Username-Page
![](assets/readme-files/desktop-3.png)

#### Tablet-Username-Page
![](assets/readme-files/tablet-3.png)

#### Mobile-Username-Page
![](assets/readme-files/mobile-3.png)


#### Desktop-Result-Page
![](assets/readme-files/desktop-4.png)

#### Tablet-Result-Page
![](assets/readme-files/tablet-4.png)

#### Mobile-Result-Page
![](assets/readme-files/mobile-4.png)


#### Desktop-Feedback-Message-Page
![](assets/readme-files/desktop-5.png)

#### Tablet-Feedback-Messages-Page
![](assets/readme-files/tablet-5.png)

#### Mobile-Feedback-Message-Page
![](assets/readme-files/mobile-5.png)


[Go Top](#Football-Quiz)
## Design

 ### Colour Schema
* I used three colours for this game site. White colour (#fff) used for options background and 
 for all the buttons,Blue colour (#2f99d6) used for all the text and dark Gray colour rgba(21, 20, 24, 0.600); used for game background.
* I chose all the colours I used from w3school website.

#### Typography
* I used a font from the Google font website and linked it with an HTML file.
* I used the font Lato for headings, numbers and for span.
* I used the Oswald font for the questions.
* I used Sans-serif font as a default when the main Lato and Oswald font does not work. By default, this font applied for all the text and numbers. 

#### Imagery
* I used one background image on all the pages. This image is of a football pitch and goal post.
* I used this image to easily inform users that this website is about football. This image does not distract the user in game because I overlayed light colour on it.
* Two more images were used, a green colour image for the right answers and a red colour image for the wrong answers.

[Go Top](#Football-Quiz)

## Features

1.  Starting block.
2.  Questions block.
3.  Result block.
4.  Feedback block.

#### Starting block :
* In the starting block, users will see the starting button and how to play the game.
* On top of the buttons there is a number for the total quiz length in regard to how many questions there are. 
* When the user will click on the how to play button, they will see one instruction block with a closing button.
* Without clicking the closing button, the user won't be able to click the start button or the how to play button.
* Without clicking the start button the user will not be able to enter the quiz.

#### Questions block :
* In the questions block, users will see correct and incorrect answer indicators with green and red colour images.
* Underneath the answer indicators, I have added correct and incorrect answer counters.
 I have also added a progress bar which tracks the user’s progression in the quiz. 
* Under the progress bar the user will see all the length of quiz remaining.
* For every question the user will see four multiple choice options to select from.
* Underneath the choices I have added a home button that takes the user straight to the home page.
* Underneath the choices opposite to the home button the user will be able to see the timer. 
The timer will reset the start of every question, with 20 seconds given for each question. 

#### Result block :
* In the result block. The user is prompted to type their name and click the submit button without typing their name the user cannot get their result as the submit button will disabled.
* After the user has written their name, they will get the result, name and the total correct and incorrect answers displayed on the screen.

#### Feedback block :
* In the feedback block, the user will have the option to select from three emojis according to how happy or unhappy they are with the quiz. 
* After clicking on the review button, the user will get a message thanking them for their feedback

## Bugs
* In the software development field, it is very common to get many bugs in your code.
* A bug that was discovered was that the user was able to answer the same question twice. This was because the answer window appeared on the screen for too long after the user had clicked on an answer.
* I resolved this by reducing the time the game stays on the window after selecting an answer from 300ms to 150ms.

## Issue Left
* There are no issues left.

## Other Features
* When the user selects their answer, they will get a different sound depending on if they choose the correct or incorrect answer.

### Feature Left to Implement
* The user should be able to check their previous scores, regardless of when they completed the quiz.
 The username should be saved in local Storage, hence whenever the user comes back, they will see their previous scores.
* The score history is saved for a month, so when users play again, they can beat their old score.

## Technologies Used

### Languages Used

* [HTML5](https://en.wikipedia.org/wiki/HTML5)
* [CSS3](https://en.wikipedia.org/wiki/CSS)
* [JS](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks Libraries and Programs Used

* [Font Awesome](https://fontawesome.com/ "Link to FontAwesome")
* I used Font awesome to get all the icons I needed for my website.  

* [Google Fonts](https://fonts.google.com/ "Link to Google Fonts")
* Google Fonts was used to import the style of font that was needed in CSS e.g. Lato, Oswald and sans-serif.

* [Git](https://git-scm.com/ "Link to Git homepage")
* Gitpod was used for writing the code in the terminal; it was also used to commit and push the code in GitHub.

* [GitHub](https://github.com/ "Link to GitHub")
* GitHub was used to store the data which was pushed by Gitpod.

* [Figma](https://www.figma.com/ "Link to Figma homepage")
* Figma was used to create the wireframe of the project before starting code on the terminal.

* [Am I Responsive?](http://ami.responsivedesign.is/# "Link to Am I Responsive Homepage")
* Am I Responsive? was used to see if the site is responsive on different types of devices.

* [Chrome Lighthouse](https://developers.google.com/web/tools/lighthouse "Link to Chrome Lighthouse homepage")
* Chrome lighthouse was used for checking the site performance and good practice.

[Go Top](#Football-Quiz)


## Testing
All the testing information is found [here](assets/test-file/testings.md) 

## Deployment

### Github Pages
To deploy a GitHub Page from the GitHub Repository, the following options were used:

1.	[Login](https://github.com/) into GitHub.

2.	Click on your Repository, then click on the left side of the side bar or go to the right side to click on your profile and select your Repository option.

3.	Click on the Setting option which is located on the top of your Project.

4.	Scroll down and in the GitHub Pages option, click on the Check it out here! Link.

5.	Under "Source", click the dropdown option called "None" and select "Master Branch".

6.	Refresh your page on the top left corner with the circle button. 

7.	Scroll back down in GitHub Pages and again click on Check it out here!

8.	The link is now published in the "GitHub Pages" section.

### Make a Clone

1. [Login](https://github.com/)

2.	Click on Your Repository option and select your project 

3.	Click on the code dropdown menu.

4.	To clone the repository using HTTPS, click "Clone with HTTPS", and copy the link.

5.	In your local IDE open the Git Bash terminal.

6.	Change the current working directory to the location where you want the cloned directory to be made.

7.	Type git clone, and then paste the URL you copied in Step 3.

           git clone https://github.com/USERNAME/REPOSITORY

8.	Press Enter. Your local clone will be created.

### Forking a Repository
1.	[Login](https://github.com/) into GitHub 
2.	On the top right, click the fork button.
3.	You will get a copy of the repository in your GitHub account.



## Credit

### Media
* The images were downloaded from freepik.com and kindpng.com .
* The sound for correct and incorrect answers downloaded from storyblocks.com .

### Code
The code which I copied or edited and get better understanding about the code from following sites:
* W3school
* Stack Overflow
* Google

## Acknowledgements
* I would especially like to thank my wife, who helped me by giving me some ideas regarding my website. She motivated me to finish this project to the best of my ability.
* Secondly I would like to thank my mentor Seun, she helped during the whole process of the project.
* Lastly I would like to acknowledge the W3School website as I gained many ideas from there. 

[Go Top](#Football-Quiz)












