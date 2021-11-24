function draw() {
  background(0, 10);
  if (startR > 0) {
    startAnimation();
  } else {
    displayWorms();
    if (!showContent && !showHome) {
      conv0.display();
    }
    if (showContent && !showHome) {
      conv1.display();
    }
    if (showHome) {
      for (let i = 0; i < navs.length; i++) {
        navs[i].display();
        navs[i].collide();
      }

      if (navs[0].active) {
        for (let i = 0; i < projs.length; i++) {
          projs[i].display();
          projs[i].collide();
        }

        if (projs[0].active) {
          for (let i = 0; i < proj0.length; i++) {
            proj0[i].display();
          }
        } else if (projs[1].active) {
          for (let i = 0; i < proj1.length; i++) {
            proj1[i].display();
          }
        } else if (projs[2].active) {
          for (let i = 0; i < proj2.length; i++) {
            proj2[i].display();
          }
        } else if (projs[3].active) {
          for (let i = 0; i < proj3.length; i++) {
            proj3[i].display();
          }
        } else if (projs[4].active) {
          for (let i = 0; i < proj4.length; i++) {
            proj4[i].display();
          }
        }
      } else if (navs[1].active) {
        passcode.display();
      } else if (navs[2].active) {
        for (let i = 0; i < contacts.length; i++) {
          contacts[i].display();
        }
      }
    }
    footer.display();
  }
}
