import { Component, OnInit } from '@angular/core';
import {SafeResourceUrl } from '@angular/platform-browser';
import { CameraPreview, CameraPreviewPictureOptions,
         CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview/ngx';

@Component({
  selector: 'app-alert-management',
  templateUrl: './alert-management.page.html',
  styleUrls: ['./alert-management.page.scss'],
})
export class AlertManagementPage implements OnInit {

  cameraPreviewOpts: CameraPreviewOptions = {
    x: 0,
    y: 0,
    width: window.screen.width,
    height: window.screen.height,
    camera: 'rear',
    tapPhoto: true,
    previewDrag: true,
    toBack: true,
    alpha: 1
  };


  // picture options
 pictureOpts: CameraPreviewPictureOptions = {
    width: 1280,
    height: 1280,
    quality: 85
  };
  picture: string;

  constructor(private cameraPreview: CameraPreview) { }
  // camera options (Size and location).
  // In the following example, the preview uses
  // the rear camera and display the preview in the back of the webview

  ngOnInit() {

  }

  startCamera() {
    // start camera
this.cameraPreview.startCamera(this.cameraPreviewOpts).then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  });
  }

  takePhoto() {
    // take a picture
    this.cameraPreview.takePicture(this.pictureOpts).then((imageData) => {
      this.picture = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
      this.picture = 'assets/img/test.jpg';
    });
  }

  takeVideo() {
     const videoOptions = {
      cameraDirection: this.cameraPreview.CAMERA_DIRECTION.BACK,
      width: (window.screen.width / 2),
      height: (window.screen.height / 2),
      quality: 60,
      withFlash: false
    };

     /*this.cameraPreview.startRecordVideo(videoOptions, function(filePath) {
        console.log(filePath);
    });*/
  }

  switchCamera() {
    // Switch camera
    this.cameraPreview.switchCamera();
  }

  stopCamera() {
     // Stop the camera preview
    this.cameraPreview.stopCamera();
  }

}
