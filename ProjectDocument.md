## <font size = "4"> <a id = "top"></a> _CMPT-276, prof. Toby J. Donaldson_ </font>
# **<font size = "6"> Group #16: </font> <br> <font size = "10"> Project Documentation</font>**
_<font size = "4">
Linh Tchou / William Blanchette / Ian Moon / Ben Cao / Wassim Khelifi
</font>_

<br>

<font size = "3">
On January 4th 2019, prof. Toby Donaldson tasked each group to document their plans for the implementation of the term-long project. This copy of the documentation is to be submitted by February 6th, 2019 for Project Release 1. Requirements for each Release can be found <a href = "http://www.cs.sfu.ca/CourseCentral/276/tjd/project.html"> here 
</a>. 
</font>

<br><br>


<p style="border:1px; border-style:solid; border-color:#FF000; padding: 1.5em; width: 330px; height: 370px;">

<font size = "5"> 
Table of Contents <br> 
</font>

<font size = "3">
  1. <a href = "#change"> Release Update: Changes, Plans, and More! </a> <br>
  2. <a href = "#reflections"> Release Update: Reflections & Post Mortem </a> <br>
  3. <a href = "#snapshots"> Release Update: Progress Snapshots </a> <br>
  4. <a href = "#use1"> Use Cases: Goals </a> <br>
  5. <a href = "#use2"> Use Cases: Manual </a> <br>
  6. <a href = "#roles"> Primary Role </a> <br>
  7. <a href = "#meetings"> Meeting Times & Communication </a> <br>
  8. <a href = "#language"> Language Choice & Software Repository </a> <br>
  9. <a href = "#methodology"> Project Methodology </a> <br>
  10. <a href = "#scheduling"> Project Scheduling </a> <br>
  11. <a href = "#risks">  Risk Analysis/Management </a> <br>
  12. <a href = "#quality"> Quality Assurance </a> <br>
  13. <a href = "#cite"> Citations </a><br>
</font>
</p>


<br><br>

**<h1> <font size = "6"> <a id = "change"></a> Release Updates: Changes, Plans, and More! </font> </h1>**
<font size = "3">
**Welcome to the ~~first~~ ~~second~~ Third Release Update!** 
<br>In this section, we will list what changes have been made to our procedures/methodologies as well as any other additional decisions that have been reached. The *Update* section is to help our "customers" efficiently review our document when necessary. 

<br>

**<h2><font size="5">April 8th: D-Day</font></h2>**
- **[NEW]: New Features & Status**
  - For the final release of our Emulator, Team#16 was able to implement `STEP BACK`, which is able to account for the most recent 1500 steps (*x300 more than what we hoped for*). The user would then be  able to step back by **x1, x10, or x50 cycles** at a time. We recommend using the `x10` option for optimal visuals. 
    - This feature is implemented as 3 buttons, unbindable to the keyboard. Users can click on the buttons to trigger this event. Step Back is only usable when the Emulator is Paused. 

  - The sound trigger has been taken out. In return, functioning sound has been added into the Emulator. We use a loaded MP3 file which is triggered everytime the timer has reached a specific value(x), lasting for another value(y). It is automatically triggered and determined by the running ROM. 

  - Homepage text-font has been changed from a Serif font to Sans Serif. 

  - System performance has been Optimized, resulting in a much faster Emulator. This will hopefully let the user experience a more modern and fun time using our Emulator.  

<br>
<img src="https://cdn.discordapp.com/attachments/414977338367803394/564563005816438784/unknown.png"></img>
  
<br><br>

- **[UPDATE]: Changes to Old Features**
   - Alterations to the homepage were made: The colour, background, and design were improved with subtle add-ons like borders and gradient. 

  - The previous Easter Egg was taken out. We felt that although it was a fun additive, it held little value for the project. We feared that it would hinder the professionalism effect the homepage had. 

<br>

**<h2><font size="5"> March 13th </font></h2>**
- **[NEW]: Accomplishments**
  - We were able to implement the `STEP FORWARD` Feature, where the user can now click on the button while the Emulator is Paused to race exactly one step forward.

  - Two new games were created:
    1. PONG (remake):
        - Move: *P1: [1][A]; P2: [4][F]*
      
    2. ENDLESS FUSE (custom):
        - Objective: *Extend the fuse. Custom take on SNAKE*
        - Move: *[W][A][S][D]*
        - Place *Fuse Line: [E]*
        - Lose State: *Press [E] to restart*

  - Emulator can now load most (if not all) original CHIP-8 ROMs. 

  - An Easter Egg has been added to the Emulator when the user types in `tobydonalson`.

  - The user can now change the pixel colors for both the Foreground and the Background. 

  - KeyPress was implemented om both Keyboard and Mouse (via KeyPad)

  - Sound Trigger (no sound)
    - We are able to detect when the soundTimer has been activated and will give a visual representation of a `BEEP!` on the top-left-hand corner of the screen. 

  - An intermediate stage of our U.I. That is, a design has been chosen for `index.html`. <br><br>
  ![index.html Site](https://cdn.discordapp.com/attachments/530971810670575616/555583121890869258/unknown.png)

  - Team#16 Logo has been created: `XIV`. <br>
  ![Team Logo](https://media.discordapp.net/attachments/530971810670575616/553071860099842068/Logo.png)

  - All Opcodes have been tested with most (if not all) original CHIP-8 ROMs. Functionality has been confirmed to work properly.
   
<br>

- **[MANUAL]: How to use our program**
  - Details for this section can be found in the new <a href="#use2">Manual: Use Cases</a> section of the project document.

  - Load the Emulator site through **index.html** and our online Tool using **pixelEditor.html**. 

  - Recommended Window Zoom-in Size: **90%**

  - You can test out our Automated Testing Framework using the instructions provided in the <a href="#quality"> Quality Assurance</a> section.
  
<br>

- **[UPDATE]: Remaining Task Spillage**
  - Implementing Sound to internal ROMs.
  
  - Triggering sound for all ROMs (external and internal).

  - `index.html` Updates:
    - Colour Theme/Palette is to be decided on and implemented.
    - Font Set is to be decided on and implemented.

  - STEP BACK (up to 5 previous states) 



<br>

- **[UPDATE]: Team Work Distribution**
  - **Wassim**: Internal ROM remake: PONG
  
  - **Ben**: Internal ROM (custom): ENDLESS RUSE
  
  - **Linh**: Updating `index.html`, overlooking ROM creation, and Testing OpCodes and ROMs.

  - **William**: Polishing the Pixel Editor Tool 

  - **Ian**: Polishing the Pixel Editor Tool and Testing ROMs. 

<br>

- **[PLAN]: Next Team Work Distribution**
  - **Wassim**: Implementing and Triggering SOUND & creating new ROMs
  
  - **Ben**: Assisting in Final Presentation & creating new ROMs
  
  - **Linh**: Updating `index.html` & Final Testing and Quality Assurance

  - **William**: Managing Final Presentaton & creating new ROMs

  - **Ian**: Final Testing and Quality Assurance & creating new ROMs


<br><br>

**<h2><font size="5"> February 27th </font></h2>**

- **[NEW]: Accomplishments**
  - Despite us being severely behind schedule soon after Release 1, our Group was able to pull through and get back on schedule with minor delays.

  - Due to severe initial delays and unforeseen scheduling complications, the Team was unable to fully implement Automated Testing. Fortunately enough however, Group#16 was able to implement a functioning Automated Testing framework using TravisCI and the extension *Chai*. 
    - More information about this can be found in the <a href="#quality"> Quality Assurance </a> section for information on how to implement and use the framework.

  - With the help of friends and cooperative team members, Group#16 was able to implement the remaining features of the Visualizer. This includes the PAUSE/RESET buttons as well as a fully functional ROM Loader that takes in compatible CHIP-8 files.

  - The main ```index.html``` file now contains:
    - a functioning screen 
    - draw functions
    - buttons
    - shortcut keypresses
    - Memory status box. 
  - Most opcodes have been tested with ROMs and have shown no conflicts.
  
  - Keep in mind that although the Team suffered major delays, we are back on schedule and thus have no need for a new schedule as changes can be made internally. 

<br>

- **[UPDATES]: Testing Framework**
   - Due to the complications the Group has faced when using GULP, we decided to switch to using *MOCHA* and *CHAI*. 

<br>

- **[UPDATES]: Remaining Task Spillage**

    - Due to earlier delays, Group#16 still lacks Higher Designs for the ```index.html``` file. The page is currently left at its default design until further Releases. 

    - We are currently in need of processing the Register Arrays onto the screen. Fortunately, the Memory box has been created, so no further delays wil be resulted from this additional feature.  

    - The `index.html` file is lacking the STEP-BACK/STEP-FORWARD feature. This has been taken into account for the upcoming Release 3. Roles have been administered and implementation has begun. 

    - Sound and Keypresses are part of the spillage. However, those responsible for creating ROM files for the CHIP-8 System are tasked with completing these operations. 


<br>

- **[MANUAL]: How to use our Program**
  
    1. Load up `index.html` in the `.zip` file. 
    2. Have a prepared CHIP-8 ROM File. 
    3. Select *Browse* at the top of the page and select your ROM File. 
    4. See that it works. (*Sorry, no key presses this Release*)
    5. See that the Memory Box works.
    6. Press `P` on your Keyboard for click `Play/Pause` to see that it works.


<br>

- **[UPDATES]: Team Distribution for Release 2**

    - **Wassim:** Creating Game Roms: PONG & BREAK-IT. 

    - **Ben:** Creating Game Roms: PONG & BREAK-IT.

    - **Linh:** Overlooking/Supervising the Creation of the CHIP-8 Tool.

    - **William:** Creating the CHIP-8 Tool: Pixel/Sprite Editor.

    - **Ian:** Creating the CHIP-8 Tool: Pixel/Sprite Editor. 

<br>

- **[PLAN]: Team Distribution for Release 3**

    - For the upcoming Release, as said above, Role Distributions have been administered to each member of the Group. 

      - **Wassim:** Creating Game Roms: PONG & BREAK-IT. 

      - **Ben:** Creating Game Roms: PONG & BREAK-IT.

      - **Linh:** Overlooking/Supervising the Creation of the CHIP-8 Tool.

      - **William:** Creating the CHIP-8 Tool: Pixel/Sprite Editor.

      - **Ian:** Creating the CHIP-8 Tool: Pixel/Sprite Editor. 

<br><br>

**<h2><font size="5"> February 6th </font></h2>**

- **[NEW]: Accomplishments**
    - Members were able to successfully learn Javascript syntax and get ahold of crucial resources such as online tutorials and websites. 

    - With the help of countless resources, we were able to implement almost all of the CHIP-8 Instructions and a compatible HTML Webpage. Primary CPU functions have been completed as well. 

      - Such functions include our ```setup()``` function which runs through all of the arrays and initializes the indexes to 0. The Hex-Codes are included in this operation as well. 
    
      - Other operations include being able to randomly generate numbers to ```this.memory``` (for testing purposes).

  - Webpage has an infinite group implemented using ```setInterval(function() {...}, ms)```. Additionally, classes and ids have been created and are ready to use with ```<div>``` separators. Styles and such are to be taken from our original HTML page: ```Chip8.js``` and be put into our new (main) file ```Chip8_Second.js```.

  - The initial setup for the Visualizer has been created, which will serve as a stepping stone for the coming days onto Release 2. 

  - Due to schedule complications, further implementations will be held off until after this release. *More information on Scheduling below.*

  <br>
- **[NEW]: How to Use Our Program**
  - For this release, we will be submitting **TWO** Javascript files for our project. The first copy (```Chip8.js```) is our initial configuration, which includes an HTML file (within the directory) holding several divs, classes, and ids for memory allocation and pixel display. 
    - Comment ```chip.Chip_Run()``` and uncomment ```chip.renderer.render(chip.getDisplayArray());```. 
    - Run the HTML page with these altercations to view all 2048 pixels (they create one large block). 

  - Because we only have our opcodes running, you can view their output and masking through the Console log within the page's Inspect option (```CTR+SHIFT+I```). You will see that memory is being allocated with arbitrary values as well as the Hex-Codes being allocated as well. We advise you to use ```Chip8_Second.js``` for this. 

  <br>
- **[UPDATE]: Github Repository**
    - New *Branches* have been created to organize versions and added files. Currently, only a handful of updates have been commited to Master (given that they are minor additives). 
    - Our latest updates have been commited to ```February-4th-Update---all```.
  
    - The link to our wbesite is down <a href="#language">below</a>.
  

  <br>
- **[CHANGE]: Testing**
    - Unlike our original plans for using *Jest* as our main source for Automated Testing, the team has decided to utilize **Travis-CI**. Not only is Travis-CI free, it also specializes in Continuous Integration (hence 'CI' in the name). 
  
    - By creating a ```*.yml``` file, any pushes and/or pulls made to/from Github will be automatically tested by the program. Given that the file will contain self-made tests, we hope to effectively test our code without having to manually run them ourselves. 
  
    - Due to slight complications in how Travis-CI operates, a second file will be created to hold our test cases. For this, we use **Gulp**. The ```*.yml``` file will simply include the file as a script source and load it.
  
  - Wassim has taken up the task as our Main Tester, along with Ian and Linh. 

  - Our program is still in need of Automated Unit and System checks, which will be thoroughly conducted immediately after this Release. Currently, such tests are done manually through the Inspect/Console option in Webpages. 


  <br>
- **[TO-FIX]: Schedule**
    - In the first half of this release, the Team was able to be on track -- sometimes ahead of schedule. In the later half of this Release release however, the team was set back several days from our schedule due to various Scheduling complications,  dictated through familial affairs and outside workload. 
  
    - In hopes of overcoming this issue, members of the group have begun adapting the Sprint method from *Agile Methodologies/Programming*. Members are sectioned into groups of 1 to 2 and are given a specific task. 
  
    - The tasks often comprised of what the groups are comfortable with doing. In the event that member(s) is/are unable to accomplish the given task, another member of the Team will serve as a substitute. 
  
    - Sprints are kept small to maximize progress, hopefully pushing us closer to our deadlines.
  
    - After this Release, adjustments to our schedule will promptly be made.
  
  <br>
- **[PLAN]: Upcoming Plans for Release 2**
    - After this Release, the Team plans to first and foremost update the term's schedule to help keep everyone up to date. 

      - Additional padded time will be accounted for in the case of future setbacks.
    
    - We will also begin testing for the next 2 days to ensure functionality of our Project before proceding onto the next phase(s). 

    - Since our second Release is dedicated to the "Visualizer," we will focus on finishing the HTML Webpage, fixing/improving on memory allocations (including borrows ROMs for testing), as well as Register/Memory output.

    - Buttons on the Webpagee will be created as well for *Pause* and Keyboard Input. Visual Display of the pixel graphics will be included in the upcoming version as well. 

    - We hope to finish this relatively early compared to our original schedule so that we may start on the Games and Tool(s). 

</font>

<br><br>

**<h1> <font size = "6"> <a id = "reflections"></a> Release Updates: Reflections & Post Mortem</font> </h1>**
<font size = "3">

**<h2><font size="5"> Release 1: February 6th (Initial) </font></h2>**
In this Release, the Team was met with various challenges.
In the beginning, members struggled with understanding the syntax of Javascript as it offered several options for the same form of functionality (e.g., how to create a function & prototypes). Due to our inexperience, we were not familiar with any form of Automated Testing, which dictated extensive research and causing delays in our schedule. Even now, testing is being developed for future Releases. Due to our lack of understanding of bitwise functions and bitshifting, we struggled with implementing the opcode instructions. This resulted in us having to seek help through Online Tutorials and Resources such as W3Schools and StackOverflow. This lack of understanding resulted in long delays to our original schedule. This implies (correctly) that our Automated Testing phase is only in its development stage and will be used after this Release. 

Despite all of our hardships, Team#16 was able pull through and deliver almost all of the features we had planned to implement. This includes:

- Implementing and Running/Testing OpCodes,
- Allocating Memory and linking them to the OpCode for Testing, 
- Having an Infinite Loop for running out project scripts,
- Organizing our Class(es), 
- Creating an HTML Webpage, and finally
- Having a basic setup for the next Release (i.e., the "Visualizer").

In addition to these surprising results, the Team was able to quickly establish stable lines of communication as introduced in Release 0. These proved to be highly effective when planning Meetings and Discussions. This played a huge role in helping everyone stay on task everyday. 

</font>

<br>

**<h2><font size="5"> Release 2: February 27th </font></h2>**
<font size = "3"> 
This Release was especially difficult for Group#16. With the onslaught of Midterms and Reading BReak Family Vacations, the Team suffered dramatic set backs from the planned schedule. We were approximately 2 weeks behind schedule with only Automated Testing firmly implemented. OpCodes were still in need of Manual Unit Testing and the Visualizer remained in its infancy stage. Progress was delayed further from the complications with implementing a functioning ROM Loader. 

The Project Manager has realized that scheduling for a long-term project for a team of 5 is fairly difficult. The numerous, unexpected variables that one must take into account each month as well as upcoming personal obligations have complicated scheuling further. This resulted in multiple delays. In the future, the Project Manager has expressed that they will take into account emergency days and 5% padding on due dates. 

Group#16 has come to the realization that working together in person has proven to be more effective than programming online separately. 

</font>

<br>

**<h2><font size="5"> Release 3: March 13th </font></h2>**
<font size = "3"> 
This Release has given the group a new outlook on Scheduling and Work Ethics, in combination with Teamwork. The heavy delays let Group members realize the feeling of urgency and low level panic. This resulted in a unified time span of heightened team performance. In other words, the Group was able to work together and produce quick results. Members were split up into their specialities and tasked to implement various features. The sense of urgency as well as daily updates and reports helped keep members on track and working. 

We found that keeping a clean GitHub repository leads to better Work Flow management and better Version Control. Our current GitHub repository is quite the mess with numerous outdated branches and various files. The Master Branch suffered from containing outdated files up until recently. These difficulties resulted in team-wide confusion for a prolonged amount of time. 

Those tasked with creating games were able to produce 2 games: one being custom-made and another a remake of the classic `PONG` game. 

In the future, Group members agree to take time and create an in-depth design plan for both the Program architecture and the GitHub repository. One suggestion includes having personal branches with the naming convention `[name]-[date:mm/dd]-work`. 

</font>

<br>

**<h2><font size="5"> Release 4: April 8th (Final) </font></h2>**
<font size = "3"> 
This term has been quite the roller coaster for everyone in our group. Being tasked with making something we’ve never heard of before along with learning several new frameworks and languages really made it a challenge for us. However, we did manage to pull through! <br>

We believe that the AGILE Development Process really does work well in a small team. Having experienced it first-hand, this project has opened our eyes to new exploratory grounds. In the beginning of the term, we tried our best following a pre-made schedule with estimated numbers. We though that, since there were 5 of us, we could pull it off in no time. Members soon found out that there exists countless cases that would lead to delays. 

Learning about Agile SW Dev. in class, we were able to quickly follow the Agile principles. This included being able to ...
  - **quickly responding to changes** rather than following a schedule, 
  - **re-define requirements** as we went along, 
  - **splitting large tasks** into smaller tasks one step at a time, 
  - **planning our work-load on a weekly basis** rather than monthly, and 
  - **learning how to effectively communicate** with one another to get jobs done as quickly as possible. This included short messages through networks, as well as stand up meetings.

<br>

Since this will be the last update for this document, I (the Project Manager) asked members how they felt throughout the term. 
 - When asked **how they felt about how they felt about the Project**, many responded with it being disinteresting for a Software Engineering course, and that the lack of Instructions made the process more difficult than it had to be in a learning stand-point. At times, members would be become frustrated with the project and behave passive-aggressively. This was due to our own scheduling problems on top of personal obligations

 - When asked about the **project's level of difficulty**, members reported that despite the lack of guidance in class, the project was at a *medium* difficulty range and was manageable thanks to the many resources found online.

 - When asked about **what went well for them and what didn't**, some members have stated that while the methods of communication worked well, coordinating meetings seemed difficult. On the other hand, others have reported that while we were able to complete tasks well ahead of time and work well with one another on tasks, the distribution of contribution was severely imbalanced throughout the term. 

 - When asked what they would have **done differently** knowing what they know now, it was a unanimous agreement that a large amount of time be invested into making the Emulation/CPU portion of the project work. Having some form of visualization of output would have been very useful when we were first developing the Emulation. For us, Release 1 turned out to be one of the most important Releases, following Release 4. 

 - When asked about the **biggest unexpected challenge** we encountered, many of us agreed that it be making the Emulator working along with loading ROMs. They both took up a significant amount of time as well as several people working together at once. 
   - This follows up with advice given to future students: Do proper research ahead of time and plan accordingly and regularly. 

 - When asked about the **worth of testing**, some answered with "yes," saying that it helped keep track of basic features and operations such as ensuring that our OpCodes were working. Others begged to differ, saying that testing as much as we did served little value. 
    - In terms of Automated testing, it served as only a foundation - a first line of defense if you will. Although we were able to learn how automated testing worked, we found that most of our testing was better done manually. 

    - Manual Testing (unit, system, acceptance) served as one of our most important phases. We integrated testing with development, interleaving between the two as we went. With each new feature, Testers would run through all possible cases to an appropriate level. We could not have done this project had it not been for our strict, regular testing. It helped catch numerous bugs and countless errors. 
   
    TL;DR: [**Manual**]: Worth it; [**Automated**]: Kind of Worth it. 

 - When asked about their **favourite part(s)** when working on this project, some highlighted the game-making to be the most enjoyable, while others said that initializing the Emulator/CPU and Registers to be the most fun, as it was most comprehensible. Members who worked on the homepage also found the task enjoyable as it related to other fields of design. 

 - Members were also asked about what **advice they would give to future students** of the Spring 201X class. 
    - Some said that future students should spend time early in the term researching on the frameworks, systems, and programming language. 
    
    - Others also suggest that members not be afraid to spend time figuring out what each person in their group is good at and setting up tasks suitable for them (this follows the AGILE manifesto: People, not Process). 
    
    - Setting up a schedule for meetings early on works well for everyone as well, as it would establish a means of communication right from the get-go to reduce missed time with members. 
    
    - Remember to behave respectfully so that members of the group enjoy working with you, since you will be with them (involuntarily) for the following 4 months. 
    
    - A tip for new students would be to get started on the Emulator/CPU aspect of the project as soon as possible, as it takes up the most amount of time compared to the rest. 

<br>

In the end, our group was able to pull through and create a project we are proud of. Despite the many challenges our team faced throughout the term, members were able to learn new frameworks, languages, and concepts that they had previously not known about. We hope to take this experience into the future and further develop ourselves into better developers and team mates working under the Agile development process. 

</font>

<br><br>

**<h1> <font size = "6"> <a id = "snapshots"></a> Release Updates: Progress Snapshots</font> </h1>**
<font size = "3">
The following were taken from our communication channels, ordered from oldest to newest. Dates follow the MM/DD/YYYY convention.

<br>

**<center>02/14/2019</center>**
<img src="https://i.gyazo.com/thumb/1200/fb553f1281ad253ba7403f21cfa0d0bb-png.jpg"></img>

<br><br>

**<center>03/04/2019</center>**
<img src="https://cdn.discordapp.com/attachments/414977338367803394/564566169185419264/unknown.png"></img>

<br><br>

**<center>03/06/2019 (1)</center>**
<img src="https://cdn.discordapp.com/attachments/414977338367803394/564566330242498561/unknown.png"></img>

<br><br>

**<center>03/02/2019 (2)</center>**
<img src="https://media.discordapp.net/attachments/414977338367803394/564566713681838081/unknown.png"></img>

<br><br>

**<center>03/16/2019</center>**
<img src="https://media.discordapp.net/attachments/530894228696465411/556685077132869657/Screen_Shot_2019-03-16_at_8.47.35_PM.png"></img>

<br><br>

**<center>03/21/2019</center>**
<img src="https://cdn.discordapp.com/attachments/530894228696465411/558500991675269130/Screen_Shot_2019-03-21_at_9.03.04_PM.png"></img>

<br><br>

**<center>03/27/2019</center>**
<img src="https://cdn.discordapp.com/attachments/414977338367803394/564568304883204126/unknown.png"></img>

</font>

<br>

___
___
<br><br>

**<h1> <font size = "6"> <a id = "use1"></a> Goals: Project Use Cases </font> </h1>**
<font size = "3">
In Software Engineering, Use Cases typically define as a list of events carried out through the interacting of both the *User* and the *Software*. Below is a breakdown for each Release's use cases:


<br> **<font size = "4"> [ Release 0 ] </font>** <br>
The first Release has a handful of requirements solely involving the submission of the initial Project Document. This document's use cases include being an passive promoter for **(1)Effective Organization** among a team-based project as well as **(2)Educational** for outside programmers aspiring to tackle their own version of this project. 

Release 0 requires the team to submit the inital version of their Product Document. For this release, its main Use case is for *Effective Organization*. This document is a crucial piece of aid in the event where troubled members are unable to contact other members such as the Project Manager for schedules and tasks. Here, they will have access to detailed plans for the group's current and future plans for the project along with additional information on work breakdown. 

Outside of the team, outside sources will be able to have access to this document for *Educational* purposes for their own research in hopes to help guide new programmers to witness the work flow and structure of a long term team-based project. This is possible through the Github repository as the Project Manager will be responsible for uploading the document regularly to keep updated copies available to members online on multiple platforms. 


<br> **<font size = "4"> [ Release 1 ] </font>** <br>
The submission of Release 1 entails a functioning Emulator for the CHIP-8 System. 
It encapsulates various Use Cases for both outside Users and Group Members for **(1)Progressive** and **(2)Educational** purposes. 

This Release has a vital Use Case that primarily benefits the team. It serves as a *Progressive Foundation* where the Emulator's purpose is to serve as a stepping stone for the CHIP-8 System to operate, due to the original console being long suspended. More information can be found <a href = "#methodology"> below </a>. 

As members continue to contribute to the development for this Release, our goal is to learn as we program. The submission serves as a method for members to document their work for archiving and later review. Additionally, similarly to the above Release, the development of the Emulator and this submission will allow outside individuals to gain access to more *Educational* resources for their personal research. Although our primary goal is to help members grow as programmers,  our secondary goal is to help upcoming programmers understand the essential necessities that are required to creating an operating Emulator.


<br> **<font size = "4"> [ Release 2 ] </font>** <br>
The submission of Release 2 requires the team to submit a functioining Visualizer (a.k.a. Graphical Interface) for members to utilize. This release is extremely crucial to the development of the entire project as it holds multiple Use Cases such as **(1)Assisting Group Members** throughout their work, **(2)Signifying a Progressive Landmark** in their current progress, and being an **(3)Educational Resource** for outside individuals to use for their personal research material.  

With the release of the Emulator, Group#16 will soon be tasked with implementing the Graphical Interface for the CHIP-8 System for the upcoming Release 2. The visualizer is extremely significant to future development as it *Assists Group Members* by allowing the system to better display incoming Input and Output, which will greatly increase the chances of more in-depth tests to be done alongside regular Terminal tests.

Once the Graphical Interface is implemented, it will allow for members to commence the development of later features including games and tools for users to use. With the operating interface, it will allow users to interact with the system through visual cues and prompts. It is believed that this will greatly enhance the user's immersion towards our software.

Group members are expected to regularly test, update, and commit their latest features to the Group's Repository for safe-keeping. Because of this regular routine, we can expect many users outside of our Group to have access to our Repository, allowing them to - *once again* - be able to further their research into the many ways one can implement a CHIP-8 System with a functioning display feature. 


<br> **<font size = "4"> [ Release 3 ] </font>** <br>
Once Release 3 has been submitted, it is expected of the team to have access to a functioning CHIP-8 System Emulator, an effective Graphical Interface,essential Tools, two Emersive Games, and an up-to-date Project Document to help progress the project development further. We believe this amount of features to be substantial and will allow for us to present a new series of Use Cases such as being a means for **(1)Entertainment** and **(2)Further Development**. 

As members are testing their new achievement, they will be able to explore what they have created. This can be seen as entertaining to them as they will be able to play through their games and utilize the created tools. It is hoped that members will have relieved stress through the testing phases. It is imperative that Acceptance (User) Testing be conducted in order for the team to gather essential, non-biased reports from volunteers. The goal for this test is to measure the Entertainment levels provided by the added games. 

Once the testing phases have been documented and completed (i.e., any/all reported issues have been resolved), the team will be able to commence the final project phase: Final Testing and Fine Tuning for Release 4. With all the features implemented, and countless passed Unit/System Tests, the Group will be able to test for deeper software regression (e.g., time and memory),  and fine tune trivial inconsistencies (e.g., proof-reading comments, renaming confusing variables, deleting old branches from the repository; etc).  It is planned that this stage will allow members to move from the Software Implementation stage to the Maintenance and Update stage if the remaining time allows for us to do so. 


<br> **<font size = "4"> [ (FINAL) Release 4 ] </font>** <br>
At the end of the term, Group#16 will have a fully funcitonal CHIP-8 System with multiple games, an essential tool (or more), and an effective graphical interface to display their efforts. Now that the journey for Group#16 has ended, we believe that the final Release holds a special **Educational** Use Case for all the members. 

With the repository complete and the Project Document in its final stage, members will be able to look back on this accomplishment one day as a source of pride. The final submission will introduce a new experience and the cultivation of each individual's skills as a programmer and a cooperative team member. It is hoped that members of Group#16 bring this new experience onward to the future to help aid them in future projects. 

<br><br>

**<h1> <font size = "6"> <a id="use2"></a> Manual: Project Use Cases </font> </h1>**
<br> **<font size = "5"> [ Release 1 ] </font>** <br>
<font size = "3">
The Users for this Release are primarily the Group Members. Since there is no real UI on the Web, no interactions are available. Group members will be using GitHub in order to manage version control and work flow. 
 </font>

<br> **<font size = "5"> [ Release 2 ] </font>** <br>
<font size = "3"> 
The Visualizer is now implemented. Users will include others outside of the group along with the group members. 

- Click the `BROWSE` Button to Choose a ROM to run from somewhere in the user's PC Files. 
- Press `P` to toggle the PAUSE/PLAY Button. 
- Click `RESET` to reset the state of the entire Emulator, including the loaded ROM file. 

</font>


<br> **<font size = "5"> [ Release 3 ] </font>** <br>
<font size = "3">
The Visualizer is now complete. Users include others outside of the grou palong with the group members.

- Click the `BROWSE` Button to Choose a ROM to run from somewhere in the user's PC Files. 
- Press `P` or Click `PLAY/PAUSE` to toggle the PAUSE/PLAY Button. 
- Click `RESET` to reset the state of the entire Emulator, including the loaded ROM file. 
- Click `STEP FORWARD` when Paused to trace one step forward. 
- Enter by Keyboard or Click on the KeyPad Buttons to give input for Key Controls. 

</font>


<br> **<font size = "5"> [ Release 4 ] </font>** <br>
**Unavailable**

<br><br>

**<h1> <font size = "6"> <a id = "roles"></a>Don't forget your roles! </font> </h1>**
<font size = "3">
Keep in mind that each person holds the responsibility of their given roles 
<br> 
but are not restricted from working with other roles outside of their own.
</font>
<br><br>

| <font size = "4"> Name </font>     | &ensp;&ensp;&ensp;&ensp;&ensp;<font size = "4"> Major/Dpt. </font> | &ensp;&ensp;&ensp;&ensp;<font size = "4"> Roles</font>                                       |
| ---------------------------------- | :----------------------------------------------------------------- | :------------------------------------------------------------------------------------------- |
| **Linh**                           | &ensp;&ensp;&ensp;&ensp;&ensp;Software Systems                     | &ensp;&ensp;&ensp;&ensp;&ensp;Project Manager / Project Document Editor / Programmer / Tester / Tool Supervisor|
| **Ian**                            | &ensp;&ensp;&ensp;&ensp;&ensp;Software Systems                     | &ensp;&ensp;&ensp;&ensp;&ensp;Programmer / Presenter (Rep) / Tester / Tool Developer                        | 
| **Ben**                            | &ensp;&ensp;&ensp;&ensp;&ensp;Software Systems                     | &ensp;&ensp;&ensp;&ensp;&ensp;Programmer / Presenter (Rep) / Scriptwriter / Game Developer                   | 
| **Wassim**                         | &ensp;&ensp;&ensp;&ensp;&ensp;Computer Science                     | &ensp;&ensp;&ensp;&ensp;&ensp;Programmer / Presenter (Rep) / Tester / Game Developer                                 |
| **William**                       | &ensp;&ensp;&ensp;&ensp;&ensp;Computer Science                     | &ensp;&ensp;&ensp;&ensp;&ensp;Programmer / Presentation Manager / Tool Developer                             |
| 

<br><br>

**<font size = "5">Work breakdown: </font>**
<br>
<br>

|             Roles                 |                                 Responsible for...                                                                                                           |
|:--------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Project Manager**               | Booking weekly meeting rooms, regularly reviewing and revising submitted code, and delegating roles and tasks to members of the Group                        |
| **Project Document Editor**       | Regularly updating the Project document as the term progresses, adjusting schedules and roles as need be, as well as adding/removing document content        |
| **Programmer**                    | Implementing the project's Software from beginning to end while upholding common Programming Conventions                                                     |
| **Tester**                        | Conducting Software Regression Tests alongside Unit, System, and Acceptance Tests throughout the production of this project                                  |
| **Presentation Manager**          | Overwatching the progress of each presentation in development as well as maintaining the quality of all presentations                                        |
| **Presenter (Representative)**    | Delivering the presentation to the audience in a professional manner and therefore representing the entirety of the Group as a whole (i.e., Public Relations)|
| **Scriptwriter**                  | Creating the presentation script (and proof-reading it) for presenters to deliver to the audience on presentation dates              |
|   **Tool Supervisor/Developer**   |  While the Supervisor is responsible for overlooking the production of the chosen Tool, Developers are tasked with creating the tool, following the instructions given by the Supervisor.  |
| **Game Developer** | Responsible for creating the Games. Games are chosen through unanimous agreements.  |
|
<br><br>

**<h1> <font size = "6"> <a id = "meetings"></a>Meeting Times & Communication </font> </h1>** 
<font size = "3"> 
Every member of the group is expected to join weekly group meetings at *SFU Surrey Campus* every **Monday** from **12:30PM to 1:30PM**. The room may vary as it is booked on a weekly basis by the Project Manager.

In the event that members _cannot_ attend or must communicate with other members outside of scheduled meetings, they can do so through SFU Email as well as the Discord and Facebook Group Chats. 
</font>

<br><br>

**<h1> <font size = "6"> <a id = "language"></a>Language of Choice & Software Repository</font> </h1>** 
<font size = "3">
The language of choice is Javascript and the software repository will be held in Github, a decision made by majority, unanimous vote.

Our group chose to use **Javascript** due to its level of difficulty being moderately easy and quick to learn. We hope to utilize this to our advantage to minimize the time spent on learning syntax and thus getting right into the program quickly. 

Thanks to both the popularity and flexibility of **Github**, it was a unanimous decision to use this tool as our (decentralized) repository. By utilizing its various tools (e.g., push, pull, fetch, commit; etc commands), we as a group will be able to simultaneously work on the project in real-time without having to share computers. Meanwhile, members will be able to quickly learn how to use Github, a fundamental skill to have in the work force. 

You may find our Repository <a href = "https://github.com/quadracation/276-emulator"> here </a>.

</font>

<br><br>

**<h1> <font size = "6"> <a id = "methodology"></a>Project Methodology</font> </h1>** 
<font size = "3"> 
Each individual release will be structured based on Incremental Development following the procedure of **Plan>Specify>Design>Implement>Test** as instructed by prof. T. Donaldson in his written inclass notes. This was decided on the fact that Incremental Development held more similarities in structure to our Project Release submissions as opposed to the traditional Waterfall method. 

How our schedule is structured, Plan, Specify, and Design are done simultaneously through the beginning *Research* phase where Specify and Plan may spill over to the Initial Setup phase. By *Initial Setup*, we mean the beginning stages of Implementation in the procedure where more requirements and specifications may be added until a core foundation has been laid out for the Development phase in the second half of Implementation. The final phase of each Release includes a final Testing procedure.  More details on phase schedules <a href = "#schedule"> here </a>.

Due to our inexperience and given time constraints, our team has decided to follow *Reuse Oriented Software Engineering* where we have chosen to utilize public softwares as a means for saving time and work. 
Members will be programming through: 
- <a href = "https://code.visualstudio.com/download"> Visual Studio Code (v1.30.1)</a>, a poplar *IDE* which supports Javascript, HTML, and Markdown files; 

- <a href = "https://nodejs.org/en">node.js (v1.15.0 LTS)</a>, a *Javascript Command Prompt* for helping us with output of Javascript files;

- <a href="https://codeshare.io/">Codeshare </a>, a site supporting (private) simultaneous group programming; and 

- The **Inspect** option in Webpages, accessed through the keyboard command ```CTR+SHIFT+I```.




<br>

**<font size = "5">CHIP-8 Emulator: Release 1 </font>** <br>
  - **[ Team Structure ]** <br>
  The entire team will work collaboratively throughout this Release. The work specifics are discussed amongst the members via designated communication methods.

  - **[ Research ]** <br>
  Each member in the group will be reponsible for self-studying relative topics encompassing the implementation of the CHIP-8 Emulator including the uses of OpCodes and how they are related to the development of the system. Outside of self-studies, members are expected to seek immediate help if they are stuck on any topics through any, if not all, means of <a href = "#meetings">Group Communication.</a>
    
    - The alloted time is assumed to be used as a means for developing basic understanding of the various topics in order to kickstart the Initial Setup phase, where further research will be conducted alongside future tasks.

  - **[ Initial Setup ]** <br>
  All members will be tasked to work on the initial setup of the Emulator. This encompasses the implementation of Opreation Codes (a.k.a. OpCodes) and is finalized through Unit Testing. Each member's specific contribution during this phase will be assigned by the Project Manager. More information on OpCodes <a href = "https://en.wikipedia.org/wiki/Opcode"> here </a> and <a href = "https://en.wikipedia.org/wiki/CHIP-8"> here </a>.

  - **[ Development ]** <br>
  The development stage will take place on the 17th of January and end on the 30th. This phase primarily consists of creating the final touches on the Emulator including the basic setup for the visualization (i.e., graphical interface & output) of the system. This phase may lead into the next Release's Initial Setup and Development as well, which has been deemed to be acceptable. 

  - **[ Testing ]** <br>
  As explained above, the team consists of multiple Testers who will run a series of both Unit and System tests to ensure the quality of the presented code. This stage is to allocate extra needed time for fine tuning output, code optimization, and reviewing software regression. More information on testing and regression can be found <a href = "#quality"> here </a>.
  
<br>

**<font size = "5"> CHIP-8 Visualization: Release 2</font>**
  - **[ Team Structure ]** <br>
  The entire group shall work collaboratively throughout this Release. Specific contribution will be assigned by the Project Manager for efficient work flow.

  - **[ Research ]** <br>
  This phase expects members to research the fundamental building blocks on what makes a graphical interpreter for the CHIP-8 System. This includes knowing the necessary variables and ADTs as well as understanding their uses and tasks. This phase serves as a stepping stone for members to learn core knowledge on what makes a sufficient (*and/or efficient*) graphical interface. Remaining expectations and requirements follow the same as above.

  - **[ Initial Setup ]** <br>
  The beginning of CHIP-8's Graphical Interface will incorporate the implementation of its basic setup including essential variables and data structures. Members will utilize what they have learned in the Research phase to create an organized work space for the later Development stage. 
  
    Starting at this time frame, the group's software repository will be used to handle version control as described <a href = "#meetings"> above</a>. Multiple branchs will be created to aid in this procedure, where each commit is not only announced through the Github History but also through Group Communication means to ensure that all members are updated on recent changes. This process is to be done throughout the entire phase.

  - **[ Development ]** <br>
  The essential makeup of the CHIP-8 Graphical Interface. This phase will mark the beginning of the system's display that will carry onto the finalization phase. The Development phase is dedicated to the implementation of the interface, which has the responsibility to help members communicate more thoroughly with the whole software throughout the project's development. 

  - **[ Testing ]** <br>
  This phase is conducted in the same manner as the Emulator Phase above. 

<br>

**<font size = "5"> CHIP-8 Games and Tools: Release 3</font>**  
- **[ Team Structure ]** <br>
  Two group members will focus on developing one game while the remaining three design any (subjectively) necessary tools for the team to use in the future. Specific group arrangements will be discussed and decided as a team to fit the expertise and experience of each member. 

- **[ Research ]** <br>
  Each group will be tasked with finding information related to their newly assigned roles. Those in charge with creating the games will be responsible for finding out the most efficient games to program, while those assigned to be on tool development must brainstorm necessary tools the team can benefit from. 
  
  Pong is a highly recommended game to implement and will most likely serve to be the first one developed. Further specifics on the second game and tools will depend on the group members and will be updated to the document. 

- **[ Initial Setup ]** <br>
  Members assigned to the Game-build group will first implement the basic setup for their game. This may include pseudo-code, screen dimensions, pixel assignment, and general code structure for future development. 

  Those put into the Tool-build group will begin implementing the first steps to a functioning tool the entire team can use and demonstrate at the future presentations. Such steps may include the pseudo-code and variable/data structure declarations, as well as basic functions. 

  The Project Manager will regularly conduct offline meetings where discussions will be held to review each group's work flow and choice of subject.   

- **[ Development ]** <br>
  Each group will implement the full versions of their assigned tasks and ensure that they are fully functional for their intended purposes. It is expected of the group to have set up the required Github repository branches for this Release. The software repository will be used all throughout this phase to aid in version control, similarly to the last phase. However, due to limited information at the time, not much more can be said for this Release phase. *Document will await further notice.*

- **[ Testing ]** <br>
  Due to the team being split up into two groups, it is assumed that each group will have at least one Tester where they will conduct a series of Unit tests  separately. This description is to be assumed as ongoing throughout the process of this phase.
  
  Once both groups have confirmed that their program is sucessfully operational, the two shall slowly merge into one main branch where further System tests will be conducted by the assigned testers. It is likely that the work will be divided into two: each half going to one Tester. 

<br><br>
<font size = "2">
**<br>
*Further information and breakdown<br>
not available at this point in time due to limited foresight.*
</font>
</font>

<br><br>

**<h1> <font size = "6"> <a id = "scheduling"></a>Project Scheduling</font> </h1>** 
<font size = "3">
The below schedules detail the group's term-long plan for the product as well as individual Release plans and dates. Keep in mind that these are mere estimations and may be subjected to changes after each Release. Due to a lack of information, definite estimations through formulated calculations are currently unavailable at the current Release stage. However, future Releases are available to this option as members continue to work and are monitored for schedule optimization.

Keep in mind that the Task "Testing" does not refer to the technique of compounded testing at the end of each cycle, as it is assumed that members will be running regular Unit Tests (as well as Regression Tests). Instead, the task refers to the final testing phases in the System, similar to roll-calls before a big performance. These may include fine-tuning certain aspects of the current program and fixes to the visual output (e.g., the format of each Output when run). Knowing that, the final Testing phases have been alloted less days compared to the development time.  
<br> 
Notice that the projected numbers on each bar of the provided graphs overlaps the estimated time by 1 unit (a Day). That is due to us including the starting day as "Day01" rather than Day00. This therefore interferes with the making of the Gantt Charts. For your convenience, please refer to the images as a guide-line to help you understand our general work flow; refer to the given tables for the specific dates. 

<br>
<font size = "4">

|                                       |
| ------------------------------------- |
| **Current Status:** COMPLETE (ON SCHEDULE)      | 
|                                       |


</font> 
<br>

**<h2><font size = "5"> Term-long Schedule </font></h2>**
![Product Schedule](https://cdn.discordapp.com/attachments/428768808031748098/535638625195655190/ProductSchedule_Gantt.jpg)
The group has proposed the above deadlines for each major feature that is to be implemented in sequential order over the span of the entire term. See above in <a href = "#methodology">Project Methodology</a> to view the separate roles and tasks of each individual group member. 

Specifically, the following tasks (along vertical-axis) are scheduled as follows:
<br>

|                 | Start Date   | End Date  |
| :-------------- | :----------- | :-------- |
| **Emulator:**   | *Jan.09*     | *Feb.5*   |
| **Visuals:**    | *Feb.6*      | *Feb.26*  |
| **Games/Tools** | *Feb.27*     | *Mar.12*  |
| **Testing**     | *Mar.13*     | *Apr.6*   |

<br><br>

**<h2><font size = "5"> Emulator (Release-1) Schedule </font></h2>**
![Release-1 Schedule](https://cdn.discordapp.com/attachments/428768808031748098/535638920331919372/Release1_Gantt.jpg)
In the first official release of our product, members will focus on creating the base of our software: the **CHIP-8 Emulator**. Here, programmers are tasked with creating a functioning, fully-capable CHIP-8 Emulator by the end of *February 8th*. 

The schedule is as specified below:
<br>

|                    | Start Date   | End Date  |
| :----------------- | :----------- | :-------- |
| **Research:**      | *Jan.09*     | *Jan.10*  |
| **Initial Setup:** | *Jan.11*     | *Jan.16*  |
| **Development**    | *Jan.17*     | *Jan.30*  |
| **Testing**        | *Jan.31*     | *Feb.5*   |



<br><br>

**<h2><font size = "5"> Visualization (Release-2) Schedule </font></h2>**
![Release-2 Schedule](https://cdn.discordapp.com/attachments/428768808031748098/535638923381047296/Release2_Gantt.jpg)
For the next Release of our product, members will be tasked with learning how to integrate their knowledge alongside new concepts and ideas to somehow create not only a visually appealing visual display, but also a fully-functioning one as well. This may include showing Input and Output and analysing its visual aesthetics.

 Due to the predicted complexity of the task, a large amount of time has been granted for the development of this Release. 

The schedule is as specified below:
<br>

|                    | Start Date   | End Date  |
| :----------------- | :----------- | :-------- |
| **Research:**      | *Feb.6*      | *Jan.7*   |
| **Initial Setup:** | *Feb.8*      | *Feb.10*  |
| **Development**    | *Feb.11*     | *Feb.24*  |
| **Testing**        | *Feb.25*     | *Feb.26*  |

<br><br>

**<h2><font size = "5"> Software-Available Games/Tools (Release-3) Schedule </font></h2>**
![Release-3 Schedule](https://cdn.discordapp.com/attachments/428768808031748098/535638926686158868/Release3_Gantt.jpg)
Starting February 27th, Group 16 will begin creating their first game as well as their initial Tool(s). The team will divide themselves into two groups: one for creating the games, and the other for creating the tools. Each group will abide to the above schedule. More information can be found above in <a href = "#methodology"> Project Methodology </a>.


<br>

Specifications for the schedule here:
<br>

|                    | Start Date   | End Date  |
| :----------------- | :----------- | :-------- |
| **Research:**      | *Feb.27*     | *Feb.28*  |
| **Initial Setup:** | *Mar.1*      | *Mar.3*   |
| **Development**    | *Mar.4*      | *Mar.8*   |
| **Testing**        | *Mar.9*      | *Mar.12*  |

</font>

<br><br><br>
<font size = "2"> 
**<br>
*Future schedules past this point are currently <br>
unavailable at the moment due to 
the nature of versatile current-day schedules.*
</font>
<br><br><br>

**<h1> <font size = "6"> <a id = "risks"></a>Risk Analysis/Management</font> </h1>**
|                                  | Consequence(s)     | Probability |Level of Risk  | Alleviation(s)                                                   |
| :------------------------------- | :----------------- | :-----------|:------------- | :--------------------------------------------------------------- |
| **Group's Inexperience:**        | *Behind Schedule*  | *High*      |*High*          | Set Personal deadlines and attend Collaborative Environments     |
| **Extreme/Dramatic Scheduling:** | *Behind Schedule*  | *High*      | *Medium*      | Plan for Frequent Meetings and establish Effective Commuincation |
| **External Components(Hardware, etc)** | *No Project Display* | *Medium* | *High*      | Conduct Frequent Tests to the System and Code     ---            |
| **Losing a Member**              | *Loss of Production* | *Very Low*  | *High*      | Restructure Schedule and Maximize Production. Simplify Features  |

<br><br><br>

**<h1> <font size = "6"> <a id = "quality"></a>Quality Assurance</font> </h1>**
<font size = "3">
As members of the group follow the intended schedules for each Release, it quickly becomes apparent that the quality of the product may dip due to differences in coding, design, and testing methods. To counteract this continuous issue, a series of tests will be done throughout the development of the product as well as frequent inspections for Coding Conventions. 

Continuous tests will be conducted throughout the making of the product to ensure the functionality of the current program. For the time being, this will be done *manually* (until an automated option is available) by designated <a href = "#roles"> Testers</a> that will be supplied with a (frequently updated) test file. Its purpose is to check all logical applications ranging from **Unit Tests** (basic functions and operations (e.g., validating logic and opcode functionality)) to **System Tests** (i.e., all functions run cooperatively and correctly once joined). In addition, a large proportion of the file will be committed to test for [Software Regression](https://en.wikipedia.org/wiki/Software_regression) in order to minimize bugs (however (non-) trivial).  
<br>

**How to use the Automated Testing Framework:** 
<br>

As explained in earlier sections, theTeam has migrated over to using TravisCI as its primary Automated Testing Tool with the backing of CHAI for extra Assertions, Expectancies; etc. Because TravisCI works as a contrinuous Integration Software, it is able to link up with Github. 

Members/Testers must install TravisCI and well as Chai inside their terminal. More information can be found online as there are countless resources to help give clear instructions. 

It is recommended that they do so inside of the main Project Folder. With every Push and Pull a member does to Github, the Github repository owner will be notified via email. If the pushes pass all of the standard tests, then they will *Pass*. Otherwise, they will block the push/pull action as a *Fail*. 

The test file contains main functional testing to ensure that regular operations are still functioning. Due to the nature of this project, members have agreed to undergo Manual Testing as the primary test base. The Testers will be using the `inspect element` option for its Console logs.  




</font>
<br><br><br>


**<h1> <font size = "6"> <a id = "cite"></a>Citations (IEEE)</font> </h1>**

<font size = "3">

**<h3><font size = "5">Release 0 </font></h3>**

- A. Pritchard, Github, 2019. [Online]. Available: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet. [Accessed: 04- Jan- 2019].

- M. Cone, "Basic Syntax | Markdown Guide", Markdownguide.org, 2019. [Online]. Available: https://www.markdownguide.org/basic-syntax/. [Accessed: 04- Jan- 2019].

- Wikipedia, "Markdown", 2018. [Online]. Available: https://en.wikipedia.org/wiki/Markdown. [Accessed: 04- Jan- 2019].
  
- C. Hope, "Create a colored border around text with HTML and CSS", Computerhope.com, 2018. [Online]. Available: https://www.computerhope.com/issues/ch001392.htm. [Accessed: 07- Jan- 2019].

- raganwald, "Task lists in all markdown documents", The Github Blog, 2014. [Online]. Available: https://blog.github.com/2014-04-28-task-lists-in-all-markdown-documents/. [Accessed: 07- Jan- 2019].

- alegscogs, "How to indent a few lines in Markdown markup?", Stack Overflow, 2011. [Online]. Available: https://stackoverflow.com/questions/6046263/how-to-indent-a-few-lines-in-markdown-markup. [Accessed: 19- Jan- 2019].

<br>

**<h3><font size = "5">Release 1(+) </font></h3>**

-  [1] L. Muller, “How to write an emulator (CHIP-8 interpreter),” in Multigesture, -[Online], availible at -http://www.multigesture.net/articles/how-to-write-an-emulator-chip-8-interpreter/, -2011.

-  [2] Johnnei, “Youtube-Tutorials”, in GitHub, [Online], availible at -https://github.com/Johnnei/Youtube-Tutorials/tree/master/emulator_chip8, 2013.

-  [3] Johnnei, “Make your own emulator - S1 Part 1: Emulation and Bitwise”, in -Youtube, [Online], available at https://www.youtube.com/watch?v=AsukaPLuTsU&t=575s,- 2012.
        
-  [4] J. Wright, “Learn JavaScript in 12 Minutes”, in Youtube, [Online], available -at 
-  https://www.youtube.com/watch?v=Ukg_U3CnJWI, 2014.

-  [5] Wikipedia, “CHIP-8”, in Wikipedia, [Online], available at -https://en.wikipedia.org/wiki/CHIP-8#Virtual_machine_description, last updated -2019. 

-  [6] Koekeishiya, “Chip-8”, in GitHub, [Online], available at
-  https://github.com/koekeishiya/Chip-8/blob/master/src/chip8.cpp, 2016.

-  [7] A. Dickson, “Chip-8 Emulator”, “chip8.js”, “renderer.js”, “index.html”, in -GitHub, [Online], availible at https://github.com/alexanderdickson/Chip-8-Emulator,- 2017.

-  [8] Hexdictionary, “00FF”, in Hexadecimal Dictionary, [Online], available at -https://www.hexdictionary.com/hex/00FF/, n.d.

-  [9] w3schools, “HTML Canvas Tutorial”, in w3schools.com, [Online], available at -https://www.w3schools.com/graphics/canvas_intro.asp, 1999.

-  [10] Quackit, “HTML Scroll Box”, in quackit.com, [Online], available at -https://www.quackit.com/html/codes/html_scroll_box.cfm, 2000.

-  [11] html, “HTML Scrolling Text”, in HTML.am, [Online], available at, -https://www.html.am/html-codes/marquees/html-scrolling-text.cfm, n.d.

-  [12] w3schools, “HTML5 Canvas”, in w3schools.com, [Online], available at -https://www.w3schools.com/html/html5_canvas.asp, 1999.

-  [13] w3schools, “HTML5 Canvas Reference”, in w3schools.com, [Online], available at - https://www.w3schools.com/tags/ref_canvas.asp, 1999.

-  [14] Chris Courses, “HTML5 Canvas Tutorial for Beginners | An Intro to Becoming a -Pro - Ep. 1”, in Youtube,  [Online], available at https://www.youtube.com/watch?-v=EO6OkltgudE, 2017.
-  [15] w3schools, “HTML canvas fillStyle Property”, in w3schools.com, [Online], -available at https://www.w3schools.com/tags/canvas_fillstyle.asp, 1999.

-  [16] Mozilla, “HTMLCanvasElement.getContext()”, in Developer, [Online], available -at 
-  https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext, -2018.

-  [17] W. Guzman, “Manipulating Pixels Using Canvas”, in CSS Tricks, [Online], -available at 
-  https://css-tricks.com/manipulating-pixels-using-canvas/, 2018.

-  [18] rwu6, “How to loop changing text in HTML/Javascript?”, in stackoverflow, -[Online], available at -https://stackoverflow.com/questions/44169668/how-to-loop-changing-text-in-html-java-script, 2017.

-  [19] Quackit, “Scroll Box Color”, in quackit.com, [Online], available at 
  https://www.quackit.com/html/codes/scroll_box_color.cfm, 2000.

-  [20] Stack Overflow, “horizontally aligning multiple divs (CSS)”, [Online],  -available at
  https://stackoverflow.-com/questions/28631005/horizontally-aligning-multiple-divs-css

-  [21] Mozilla, “Math.random()”, in Developer, [Online], available at
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random, 2018

-  [22] S. Banerjee, “JavaScript | toString() function”, in GeeksforGeeks, [Online], -available at https://www.geeksforgeeks.org/javascript-tostring-function/, 2015.

-  [23] Word Press, “Markdown quick reference cheat sheet”, in WordPress.com,  -[Online], available at https://en.support.wordpress.com/markdown-quick-reference/, n.d.

-  [24] E. Pini, Explaining Storing Hexadecimals into Memory inside randomizeMemory(), Helped on February 5, 2019 via private Discord Chat.
  
-  [25] E. Pini, Assisted in testing Opcodes and textarea Scrollbar, Helped on February 20th, 2019 via Face-to-Face.

-  [26] Opcode Bit operations explained by Kyle Saburau (purpose: bitshifting), Helped on Jan.10, 2019 via Facebook Messenger. 

-  [27] Sir, T. (2016). Chip-8 interpreter. [online] YouTube. Available at: -https://youtu.be/LuT2YrBasqE [Accessed 2 Feb. 2019].

- [28] “Using files from web applications,” MDN Web Docs, 22-Jan-2019. [Online]. Available: https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications. [Accessed: 20-Feb-2019]. 

- [29] A. Rasha, Helped with Sound Recognition, Helped on March 5th, 2019 via Face-to-Face.

- [30] B. Chen, Helped with Keypress & Binding, Helped on March 7th, 2019 via Face-to-Face.

- [31]  Code Club, "Pixel Art", in Code Club Projects, [Online], available at https://codeclubprojects.org/en-GB/webdev/pixel-art/, 2012.

- [32] J. Ortega, Helped with Step Back, Helped on March 27th, 2019 via Face-to-Face.

</font>


<br><br><br>
<div style = "text-align: right"> <a href = "#top">Back to top </a></div>

***
*<center>Produced by Visual Studio Code (2018)</center>*
*<center> Markdown Conversion to HTML via Extension by 
<a href = "https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one"> Markdown All In One
</a>(Yu Zhang, 2018) </center>*
***
