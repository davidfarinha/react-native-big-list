(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[102],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(n),u=a,f=c["".concat(p,".").concat(u)]||c[u]||d[u]||i;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},465:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],l={},p={unversionedId:"extras/migrate-flatlist",id:"extras/migrate-flatlist",isDocsHomePage:!1,title:"Migrate from FlatList",description:"Migration and then the replacement of a FlatList is very simple.",source:"@site/docs/extras/migrate-flatlist.md",sourceDirName:"extras",slug:"/extras/migrate-flatlist",permalink:"/react-native-big-list/docs/extras/migrate-flatlist",editUrl:"https://github.com/marcocesarato/react-native-big-list/edit/master/docs/docs/extras/migrate-flatlist.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sections List",permalink:"/react-native-big-list/docs/basics/sections-list"},next:{title:"Props",permalink:"/react-native-big-list/docs/props"}},s=[{value:"Getting started",id:"getting-started",children:[{value:"Example",id:"example",children:[]}]},{value:"Next steps <small><em>(optional)</em></small>",id:"next-steps-optional",children:[{value:"Final result",id:"final-result",children:[]}]}],m={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Migration and then the replacement of a FlatList is very simple."),(0,i.kt)("p",null,"BigList permit a fast way replacement of the FlatList component using some aliases of props that ",(0,i.kt)("strong",{parentName:"p"},"replace")," the default props.\nThe props compatibles are listed on ",(0,i.kt)("a",{parentName:"p",href:"/react-native-big-list/docs/props#flatlist"},"Props List"),".\nAll of them should be replaced with their related props of BigList ",(0,i.kt)("em",{parentName:"p"},"(recommended)"),"."),(0,i.kt)("p",null,"The main props of FlatList are compatible with BigList like ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," and its structure, ",(0,i.kt)("inlineCode",{parentName:"p"},"ListHeaderComponent"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ListHeaderComponentStyle")," etc..."),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("p",null,"You just need to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83d\udcdd","\xa0","Import the component"),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udcdd","\xa0","Replace the name of the component from ",(0,i.kt)("inlineCode",{parentName:"li"},"FlatList")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"BigList"),"."),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udcdd","\xa0","Add the props for the heights",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"BigList need to define a static height of the items for maintain great performances.",(0,i.kt)("br",null),"\nIf you use ",(0,i.kt)("inlineCode",{parentName:"p"},"getItemLayout")," you don't need to define ",(0,i.kt)("inlineCode",{parentName:"p"},"itemHeight"),(0,i.kt)("br",null)),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"itemHeight")," for items (default ",(0,i.kt)("inlineCode",{parentName:"li"},"50"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"headerHeight")," for the header (default ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"footerHeight")," for the footer (default ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),")"))))),(0,i.kt)("p",null,"Enjoy \ud83d\ude03"),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("h4",{id:"before"},"Before:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import { FlatList } from "react-native";\n\nconst ITEM_HEIGHT = 50;\n\n/* ... */\n\n<FlatList\n  style={styles.list}\n  data={data}\n  ListHeaderComponent={renderHeader}\n  ListFooterComponent={renderFooter}\n  ListFooterComponentStyle={styles.footer}\n  ListEmptyComponent={renderEmpty}\n  getItemLayout={(data, index) => ({\n    length: ITEM_HEIGHT,\n    offset: ITEM_HEIGHT * index,\n    index,\n  })}\n  renderItem={renderItem}\n  keyExtractor={(item) => item.value}\n/>;\n')),(0,i.kt)("h4",{id:"after"},"After:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import BigList from "react-native-big-list";\n\nconst ITEM_HEIGHT = 50;\n\n/* ... */\n\n<BigList\n  style={styles.list}\n  data={data}\n  renderItem={renderItem}\n  ListHeaderComponent={renderHeader} // Replaceable with `renderHeader`\n  ListFooterComponent={renderFooter} // Replaceable with `renderFooter`\n  ListFooterComponentStyle={styles.footer} // This works only with `ListFooterComponent`\n  ListEmptyComponent={renderEmpty} // Replaceable with `renderEmpty`\n  getItemLayout={(data, index) => ({\n    length: ITEM_HEIGHT,\n    offset: ITEM_HEIGHT * index,\n    index,\n  })} // Replaceable with `itemHeight={ITEM_HEIGHT}`\n  keyExtractor={(item) => String(item.id)} // Removable\n  //  New props\n  headerHeight={100} // Default 0, need to specify the header height\n  footerHeight={100} // Default 0, need to specify the foorer height\n/>;\n')),(0,i.kt)("h2",{id:"next-steps-optional"},"Next steps ",(0,i.kt)("small",null,(0,i.kt)("em",{parentName:"h2"},"(optional)"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"These steps are recommended but if you want turn back to FlatList in anytime you can keep only the first steps without any problems.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83d\udcdd","\xa0","Replace ",(0,i.kt)("inlineCode",{parentName:"li"},"ListHeaderComponent")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"renderHeader")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udcdd","\xa0","Replace ",(0,i.kt)("inlineCode",{parentName:"li"},"ListFooterComponent")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"renderFooter")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udcdd","\xa0","Replace ",(0,i.kt)("inlineCode",{parentName:"li"},"ListEmptyComponent")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"renderEmpty")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udcdd","\xa0","Replace ",(0,i.kt)("inlineCode",{parentName:"li"},"getItemLayout")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"itemHeight")),(0,i.kt)("li",{parentName:"ul"},"\u274c","\xa0","Remove ",(0,i.kt)("inlineCode",{parentName:"li"},"keyExtractor")),(0,i.kt)("li",{parentName:"ul"},"\u274c","\xa0","Remove ",(0,i.kt)("inlineCode",{parentName:"li"},"ListFooterComponentStyle")),(0,i.kt)("li",{parentName:"ul"},"\u274c","\xa0","Remove ",(0,i.kt)("inlineCode",{parentName:"li"},"ListHeaderComponentStyle"))),(0,i.kt)("p",null,"To have more details about props check the ",(0,i.kt)("a",{parentName:"p",href:"/react-native-big-list/docs/props"},"Props list")),(0,i.kt)("h3",{id:"final-result"},"Final result"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import BigList from "react-native-big-list";\n\nconst ITEM_HEIGHT = 50;\n\n/* ... */\n\n<BigList\n  style={styles.list}\n  data={data}\n  renderItem={renderItem}\n  renderHeader={renderHeader}\n  renderFooter={renderFooter}\n  renderEmpty={renderEmpty}\n  itemHeight={ITEM_HEIGHT}\n  headerHeight={100}\n  footerHeight={100}\n/>;\n')))}d.isMDXComponent=!0}}]);