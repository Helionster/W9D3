import { API, broadcast } from "./util";

export default class FollowToggle {
  constructor(toggleButton) {
    this.toggleButton = toggleButton;
    this.toggleButton.addEventListener("click", this.handleClick.bind(this));
  }

  async handleClick(event) {
    event.preventDefault();
    console.log(this.followState);

    if (this.toggleButton.FollowState === "followed") {
      this.unfollow();
    } else if (this.toggleButton.FollowState === "unfollowed") {
      this.follow();
    }
  }

  async follow() {
    this.followState("followed")
  }

  async unfollow() {
    this.followState("unfollowed")
  }

  render() {
    switch (this.followState) {
      case 1: this.toggleButton === "Follow!" 
        this.toggleButton === "Unfollow!"
      case 2: this.toggleButton === "Unfollow!"
        this.toggleButton === "Follow!"
    }
  }

  get followState() {
    return this.toggleButton.dataset.followState;
  }

  set followState(newState) {
    this.toggleButton.dataset.followState = newState;
    this.render();
  }
}