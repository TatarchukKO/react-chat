let idIncr = 1;

const messages = [
  {
    id: idIncr++,
    userId: idIncr++,
    date: Date.now(),
    avatar: 'http://www.favslist.com/photos/pages/x1/Garrosh-Hellscream-2013-5509.jpg',
    name: 'kozya',
    msg: `In React, inline styles are not specified as a string.
        Instead they are specified with an object whose key is the camelCased version of the style name,
        and whose value is the style's value, usually a string`,
  },
  {
    id: idIncr++,
    userId: idIncr++,
    date: Date.now(),
    avatar: 'https://t00.deviantart.net/fOl7Sr8k3HELqkI5Pf3PGJapOaY=/fit-in/150x150/filters:no_upscale():origin()/pre00/d099/th/pre/f/2010/302/9/c/my_cataclysm_icon_by_mucsiattila-d31qp8f.png',
    name: 'kanstantsin',
    msg: `Webkit-based web browsers like Safari and Chrome have led web innovation the past few years.
  Whether its implementing new JavaScript APIs, providing more CSS capabilities than other browsers,
  or simply providing blazing-fast page rendering, WebKit has been head and shoulders above other browsers in page control and
  CSS features.  One of those subtle features is the ability to control textarea resizing.  FireFox will provide this same capability
  in Firefox 4.  Let me show how to control textarea resizing with CSS.`,
  },
  {
    id: idIncr++,
    userId: idIncr++,
    date: Date.now(),
    avatar: 'http://www.favslist.com/photos/pages/x1/Garrosh-Hellscream-2013-5509.jpg',
    name: 'kozya',
    msg: `In React, inline styles are not specified as a string.
Instead they are specified with an object whose key is the camelCased version of the style name,
and whose value is the style's value, usually a string`,
  },
  {
    id: idIncr++,
    userId: idIncr++,
    date: Date.now(),
    avatar: 'https://t00.deviantart.net/fOl7Sr8k3HELqkI5Pf3PGJapOaY=/fit-in/150x150/filters:no_upscale():origin()/pre00/d099/th/pre/f/2010/302/9/c/my_cataclysm_icon_by_mucsiattila-d31qp8f.png',
    name: 'kanstantsin',
    msg: `Webkit-based web browsers like Safari and Chrome have led web innovation the past few years.
  Whether its implementing new JavaScript APIs, providing more CSS capabilities than other browsers,
  or simply providing blazing-fast page rendering, WebKit has been head and shoulders above other browsers in page control and
  CSS features.  One of those subtle features is the ability to control textarea resizing.  FireFox will provide this same capability
  in Firefox 4.  Let me show how to control textarea resizing with CSS.`,
  },
];

export default messages;