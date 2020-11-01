<h3 align="center">vrushak</h3>

<h3>Introduction</h3>
<p>Agriculture is the most important job in the world. Agriculture is the science and art of cultivating plants and livestock. The existence of human civilization and other creatures is affected by agriculture. We humans and other creatures live on the world due to the food given by the plants. India is one of the world's largest producers of rice, including white rice and brown rice, grown mostly in the eastern and southern parts of the country. Many at times farmers face a lot of troubles regarding the growth of the crop. One such trouble is with the diseases which affect the crop. These diseases affect the yield of the crop.
<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This project focuses on identifying the disease affected by the crop. The aim of our future work is to help a large community of farmers particularly involved in paddy farming to understand and predict the disease affected to the crop. This work is splitted into two tracks. Deep learning track and web development track. In the Deep learning track, Dataset with paddy plant disease is taken and trained with a deep learning model and based on its results, the model is deployed into a web application for inference. As a part of web development track, a web application would be developed which acts as a medium to help farmers. The deep learning model would be deployed in the website through which the crop analysis would be made by the website.
</p>

<h3>Goals</h3>
<ol>
  <li>To develop an accurate deep learning model capable of correctly predicting plant ( paddy ) diseases. </li>
  <li>To develop a web application consisting of a proper and easy to use UI which can help users use the deep learning model to test their crops.</li>
</ol>

<h3>Approach</h3>
<h4>Deep Learning</h4>
<p>
First the dataset can be taken from standard organizations like UCI, Kaggle, etc. With the available dataset, a tensorflow model would be developed in colab which can get a great accuracy with any test set. The developed tensorflow model is converted to tensorflow.js model using inbuilt functions. Later the javascript model is then used in a web application for inference purposes.
</p>
<h4>Web Development</h4>
<p>
Front end website would be developed by bootstrap, javascript. The website consists of a main, about and services pages. The services page consists of various crops ( For this hackathon only the paddy crop would be used due to the time factor of the hackathon. ) and when selected a crop its respective deep learning model would be used to predict any diseases affected by the crop. After predicting the disease, the web application can suggest various medications used to help in prevention of the disease to the crop thereby increasing the yield of the crop. 
</p>

<h3>Technologies Used</h3>
<ol>
  <li>Deep Learning
  <ul>
    <li>Tensorflow</li>
    <li>OpenCV</li>
    <li>Tensorflow.js</li>
  </ul></li>
  <li>Web Development
  <ul>
    <li>HTML,CSS</li>
    <li>Bootstrap</li>
    <li>Javascript</li>
    <li>Node.js</li>
    <li>Mongodb</li>
  </ul></li>
</ol>

<h3>Social Impact And Use Cases</h3>
<p>
Our work can help a large community of farmers particularly involved in paddy farming to understand and predict the disease affected to the crop so that the farmer can then take preventive measures to save his crop. The early detection of diseases is important in agriculture for an efficient crop yield. Our project includes a web application which contains a structured UI so that the farmers or any other users feel comfortable in handling it. The use case of our work is mainly focussed on the farmers but any other people who love to have small farms and would like to do it as a hobby then it would definitely be useful for them. As of now our work does not contain any hardware so it can be accessed by anyone without any cost. 
</p>

