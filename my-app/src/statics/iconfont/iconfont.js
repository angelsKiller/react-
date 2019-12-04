import {createGlobalStyle} from 'styled-components'

export const GlobalStyle=createGlobalStyle`
@font-face {font-family: "iconfont";
src: url('iconfont.eot?t=1560998893376'); /* IE9 */
src: url('iconfont.eot?t=1560998893376#iefix') format('embedded-opentype'), /* IE6-IE8 */
url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
url('iconfont.woff?t=1560998893376') format('woff'),
url('iconfont.ttf?t=1560998893376') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
url('iconfont.svg?t=1560998893376#iconfont') format('svg'); /* iOS 4.1- */
}


.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`


