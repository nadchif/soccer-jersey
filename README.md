# Soccer-Jersey

Generate Soccer Jersey SVG images. Generates Data URIs that can be used directly as image src.

## Pros & pros
Save network data, by dynamically generating soccer jersey assets suited for each player. Great for large projects where you would want to customize Soccer Jersey for each player.

## Install

```
npm i soccer-jersey
```

## Live Demos
[View live demos & examples](https://nadchif.github.io/soccer-jersey/)

## Usage

### API
```
   SoccerJersey.draw({
    shirtText: <string>,
    textColor: <string>,
    textOutlineColor?: <string>,
    textBackgroundColor?: <string>,
    shirtColor: <string>,
    sleeveColor: <string>,
    shirtStyle: <'plain' | 'two-color' | 'striped' | 'striped-thin' | 'striped-thick' | 'waves' 
                | 'checkered' | 'hoops' | 'single-band' | 'dashed'>,
    shirtStyleColor?: <string>,
    shirtStyleDirection?: <'diagonal-right' | 'diagonal-left' | 'horizontal' | 'vertical'>,
}, 
encodeToDataUri?: boolean): string
```


### React

```
import SoccerJersey from "soccer-jersey";

const TeamPage = () => {

  const jerseyImgSrc =  SoccerJersey.draw({  
      shirtText: "ARS",
      shirtColor: "#f00000",
      sleeveColor: "#fff",
      shirtStyle: "checkered",
      shirtStyleColor: "#dc0001",
      textColor: "#fff",
    }); // data:image/svg+xml;base64,......

...

  return (
    <div>
      <h1>ARS</h1>
      <img src={jerseyImgSrc} />
    </div>
  );
}
```

### Vanilla
```

<div>
  <h1>BHA</h1>
  <img id="jerseyImg" />
<div>

...

<script "dist/soccer-jersey.min.js"></script>
  <script>
    var jerseyImgSrc =  SoccerJersey.draw({  
        shirtText: "BHA",
        shirtColor: "#026fd0",
        sleeveColor: "#026fd0",
        shirtStyle: "striped-thin",
        shirtStyleColor: "#fff",
        textColor: "#fff",
      }); // data:image/svg+xml;base64,......
    var imgNode = document.getElementById("jerseyImg");
    imgNode.setAttribute('src', jerseyImgSrc);
  </script>
</body>
```


### Angular

Create "safe" pipe to allow dynamic Data URIs. 
```
// safe-html.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Pipe({ name: 'safe' })

export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url): SafeHtml {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
```
Add Pipe to Declerations

```
import { SafeHtmlPipe } from './safe-html.pipe';

...

@NgModule({
  declarations: [
    ...
    SafeHtmlPipe,
  ]
})
```
Use in components
```
@Component({
...
  template: `
    <div>
      <h1>MCI</h1>
      <img [src]="jerseyImgSrc | safe">
    </div>
  `,
...
})
export class AppComponent {
  ...
  jerseyImgSrc = SoccerJersey.draw({
    shirtText: 'MCI',
    shirtColor: '#98c5e9',
    sleeveColor: '#98c5e9',
    shirtStyle: 'plain',
    textColor: '#00285e',
  });
}
```
