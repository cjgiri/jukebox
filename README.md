# jukebox

Jukebox is a class project built to experiment with the Web Audio API. It maps keypresses to notes, allowing the user to play live tracks and record them for future playback/ to annoy their friends.

## Features & Implementation

In Jukebox, React components are built to represent each note. On keydown events, the KeyStore is updated to reflect notes that are currently active. The OrganKey components listen to the KeyStore and play using the Web Audio API if they are active.

To record tracks, a listener is set on the KeyStore and updates a 'roll', just like a player piano's, at frequent intervals. Track playback works almost exactly like live playback, with the player roll mimicking keydown events.


## Future Improvements

### Visual Interface

It would be great to give this project a better interface, both for displaying a clickable keyboard and to leverage another future feature:

### Storage of multiple tracks

What fun is it to record tracks if you can't save and share them? Well, it's still fun, but it could be more fun!
