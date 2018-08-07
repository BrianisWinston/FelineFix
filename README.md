# FelineFix

---

![screen shot 2018-02-09 at 1 48 46 pm](https://user-images.githubusercontent.com/26920351/36051879-78f11bec-0da0-11e8-8c1e-a91f9808e121.png)

Live Site: https://felinefix.herokuapp.com/

FelineFix is an Instagram clone, one of the most popular and influential social media platforms ever. Instead of users uploading photos of their choosing, FelineFix is a cat themed Instagram clone meant to unite kitty lovers from everywhere! "Sign up to get your daily FelineFix!"

---

## Technology

Built with ...
* Ruby on Rails and PostgreSQL on the backend

  <img src="https://user-images.githubusercontent.com/26920351/36052369-45a5788a-0da2-11e8-8058-8ef5c98c759c.jpeg" height="30">
  <img src="https://user-images.githubusercontent.com/26920351/36052411-766d6d88-0da2-11e8-8585-8fe14190f03b.png" width="30">  
* HTML, CSS, ReactJS/Redux and jQuery on the frontend

  <img src="https://user-images.githubusercontent.com/26920351/36052477-a6e7e416-0da2-11e8-813a-1ee556d4d8b0.png" width="30">  <img src="https://user-images.githubusercontent.com/26920351/36052488-b2fb00b2-0da2-11e8-995b-aeac3b9e68bb.png" height="30">  <img src="https://user-images.githubusercontent.com/26920351/36052718-a5709848-0da3-11e8-8a16-bf47966d3f63.png" width="25">  <img src="https://user-images.githubusercontent.com/26920351/36052733-b59ab8f2-0da3-11e8-941b-2afc80a4219e.png" width="25">  <img src="https://user-images.githubusercontent.com/26920351/36052738-c0aa4ed8-0da3-11e8-9497-aade7259fbfd.png" width="34">

* Cloudinary used as a photo cloud server.

  <img src="https://user-images.githubusercontent.com/26920351/36053327-2677ee8a-0da6-11e8-8228-ad114c4d469d.png" width="30">
---
## Features & Implementation

### Photo Creation and Display
A user can upload a photo into the Cloudinary database and instantly see a preview before it is submitted to the website. Furthermore, the user has the option to input a caption to give the picture context.

<img src="https://user-images.githubusercontent.com/26920351/36053125-341acfe0-0da5-11e8-9625-19a0475e7b4d.png" width="700">

Once submitted, the photo data is sent to through the React/Redux cycle towards the backend, Rails, which sends the image url into the Rails database. In addition, in the home page, a life cycle hook grabs all the photos in the database which is then displayed.

<img src="https://user-images.githubusercontent.com/26920351/36053546-e1608680-0da6-11e8-8690-60cd165b4d74.png" width="700">

If the current user has a photo in the photo feed, they have the option to delete the photo marked in the top right of the photo container. With that being said, the user does not have the ability to delete other user's photos.

<img src="https://user-images.githubusercontent.com/26920351/36053587-0f8a3394-0da7-11e8-92b3-8b3040776b91.png" width="400">

---

## Code Examples and Challenges

One of the challenges I spent too much time on was being confused on how to display a photo as a preview before submitting the url to the database. I was unsure how to write my code because at first I was sending the new photo url directly to my database. Then I realized I was writing in a React component, which is basically a class. So I could create a blank image url,
```javascript
//upload_button.jsx
this.state = {
  modalIsOpen: false,
  caption: "",
  createdPhoto: ""
};
```
 and put a link to it in my html.
 ```javascript
 //upload_button.jsx
 <div className="modal-photo-box">
  <img
    className="modal-photo-preview"
    src={ this.state.createdPhoto }
  />
 </div>
 ```
 Once created, I set a new state, which would then show the new photo.
 ```javascript
 //upload_button.jsx
 postPhoto(e) {
   e.preventDefault();
   let captionValue = this.state.caption
   let newPhoto = { img_url: this.state.createdPhoto, caption: captionValue };
   this.props.createPhoto(newPhoto);
   this.closeModal();
 }
 ```
---

## Ideas for Future Work

### Comments

I cannot start an Instagram clone project without including one of its' most important aspects - commenting photos. This is key for creating the user interaction and experience. This seems challenging, because I will need to make sure my data is sending and receiving information correctly. I am excited to take on that challenge.


### Likes

Another key aspect of Instagram is its' likes. In real time, users would see what photos they liked, they would also be notified in real time when they receive likes on their photos.


### Adding friends

You cannot have a social platform without the ability to add other users and share information, in this case photos, with them. I assume I would need some sort of joins table in order to keep track who are friends with who.
