# Brain Tumor Detection Using Machine Learning and MRI Images

![c0499304-400px-wm](https://user-images.githubusercontent.com/115658965/230519773-67694a8a-d08a-4e9d-8dec-68aab0ec7c74.jpg)


# Authors
Youssouf Ismael, Hinna Ahmad, Komal Taware, Natasha Girdharry 

# Project Outline 
Brain tumors are one of the most deadly and challenging diseases to diagnose and treat. The current methods of diagnosing brain tumors involve the use of Magnetic Resonance Imaging (MRI) scans. However, analyzing these scans is time-consuming and requires expertise. Furthermore, the ability to accurately classify and segment tumors in medical images is crucial for successful diagnosis, treatment planning, and monitoring of brain tumors. Use of Machine Learning (ML) algorithms can help to analyze these scans in a faster and more accurate way to effectively identify patients with brain tumors to automate the detection and segmentation process, reducing the workload on medical professionals and potentially improving patient outcomes.


# Objective 
The objective of this project is to develop a machine learning models that can detect brain tumors accurately using MRI images that can be uploaded onto a website. The models will be trained to specifically minimize the instances of false negatives, which is crucial in a medical context. One model will detect whether or not a tumor is present, the other -in the case of a positive result- will determine what type of tumor it is. 

There will be two types of models made, 1 is trained on a dataset of MRI images that have been labeled with either the presence or absence of a tumor. The model will then be able to classify new MRI images as either having a tumor or not. 

# Datasets

We've gathered data from Kaggle and housed them within an AWS S3 bucket to feed our models for easy access:
https://s3.console.aws.amazon.com/s3/buckets/brain-tumor-data?region=us-east-2&tab=objects

https://www.kaggle.com/datasets/navoneel/brain-mri-images-for-brain-tumor-detection
https://www.kaggle.com/datasets/sartajbhuvaji/brain-tumor-classification-mri

<img width="403" alt="image" src="https://user-images.githubusercontent.com/115593434/232891344-8cbf86ee-2020-4962-9120-e73061489c5a.png">


# About the Models

## Positive-Negative Classification via CNN

We've chosen to use a Convolutional Neural Network to produce a model that will determine whether or not a tumor is present in a brain MRI image. The network was fed images from the S3 bucket and went through 25 epochs to avoid overfitting. 

<img width="316" alt="image" src="https://user-images.githubusercontent.com/115593434/232886516-101b71ec-e0a5-49a1-9836-b0244cecc347.png">

<img width="284" alt="image" src="https://user-images.githubusercontent.com/115593434/232886619-532e0359-1d7e-42cf-8682-43e5759b6ead.png">

The goal was not to maximize overall accuracy, **but to maximize recall**, essentially minimizing the likelihood of false negatives. We managed to reach a recall of 97.12%. 

<img width="386" alt="image" src="https://user-images.githubusercontent.com/115593434/232887114-26f76f15-25a2-4ee6-a038-0d02aabc928c.png">


## Tumor Differentiating Model via CNN

Once we've determined whether or not a tumor is present, we move onto a second model that will help healthcare providers quickly determine what type of tumor the patient has to speed up diagnosis and treatment plan implementation. 

<img width="458" alt="image" src="https://user-images.githubusercontent.com/115593434/232890928-4e6f844a-8f20-4d31-9503-ce57393717bb.png">

# WebApp

