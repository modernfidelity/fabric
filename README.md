

     ______   ______     ______     ______     __     ______
    /\  ___\ /\  __ \   /\  == \   /\  == \   /\ \   /\  ___\
    \ \  __\ \ \  __ \  \ \  __<   \ \  __<   \ \ \  \ \ \____
     \ \_\    \ \_\ \_\  \ \_____\  \ \_\ \_\  \ \_\  \ \_____\
      \/_/     \/_/\/_/   \/_____/   \/_/ /_/   \/_/   \/_____/



# Fabric

This is the home of Fabric, a UX/UI component library for micro app framework built on top of Angular, Material Design and Bootstrap.


### Installation

To add to your project run :

    npm install @modernfidelity/fabric --save


### Getting started

See our starter kit to help with building your first project with Fabric

### Versions

Fabric uses SEMVER for its package versions.

When adding a new a component please update the MINOR verion number.
When updating an existing component or bugfix please update the PATCH verion number.

### Tools :

Build tools are based around gulp currently and are wrapped via npm run commands.

*To run a production build please run the following :*

    npm run build:prod

This will create a folder '/dist' with the lib in it.

## The goal of Fabric
Our goal is to build a set of high-quality UI components built with Angular and TypeScript for use within
micro-apps and general web applications.

### What do we mean by "high-quality"?
* Internationalized and accessible so that all users can use them.
* Straightforward APIs that don't confuse developers.
* Behave as expected across a wide variety of use-cases without bugs.
* Behavior is well-tested with both unit and integration tests.
* Performance cost is minimized.
* Code is clean and well-documented to serve as an example for Angular devs.

## Browser and screen reader support
Fabric supports the most recent two versions of all major browsers:
Chrome (including Android), Firefox, Safari (including iOS), and IE11 / Edge

We also aim for great user experience with the following screen readers:
* NVDA and JAWS with IE / FF / Chrome (on Windows).
* VoiceOver with Safari on iOS and Safari / Chrome on OSX.
* TalkBack with Chrome on Android.