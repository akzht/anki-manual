# 樣式與 HTML [Styling & HTML<span class="original-link">（原文）</span>](https://docs.ankiweb.net/templates/styling.html)

<!-- toc -->

## 卡片樣式

要存取樣式表，請按下「背面模板」按鈕旁的「樣式」按鈕。在樣式表中，你可以改變卡片的背景顏色、預設字型、文字對齊等等。

可用的標準選項有：

**font-family**\
卡片顯示字型的名稱。如果字型名稱有空格，比如「Microsoft JhengHei」，則需要包含在英文半形雙引號中：`"Microsoft JhengHei"`。 你也可以同時加入多個字型，請參閱下文。

**font-size**\
字型的大小。請確保在數字後加入單位如加入`px`來以像素作為單位。

**text-align**\
文字對齊如`center`置中、`left`對齊或`right`右對齊。

**color**\
文字的顏色。基本的顏色可以直接使用英文單字表示，如`blue`或`red`。你也可以使用HTML色碼來使用更多顏色。進一步了解 [HTML顏色代碼](https://htmlcolorcodes.com/zh/)。

**background-color**\
卡片的背景顏色。

樣式表中可以加入任意CSS程式碼。例如，進階使用者可以為卡片背景加入圖片或漸變色。如果你想修改卡片上某一區域的樣式但不知道從何下手，可以透過網路上的資源來自學CSS程式碼。

所有卡片共用同一樣式表。因此當你做出更動時，同一筆記類型的所有卡片都會被影響。不過，你可以在樣式表中加入限定卡片的程式碼。例如，要讓第一張卡片顯示為藍色背景，其他卡片全部為黃色，你可以這樣設定：

```css
.card {
  background-color: yellow;
}
.card1 {
  background-color: blue;
}
```

## 調整影像大小

Anki預設會將影像縮放至符合螢幕大小。要停用這一功能，你可以在樣式表底部（預設的`.card { ... }`外面）加入以下程式碼：

```css
img {
  max-width: none;
  max-height: none;
}
```

AnkiDroid有時會[無法符合螢幕大小](https://github.com/ankidroid/Anki-Android/issues/3612)。使用CSS設定影像最大長寬本應解決這一問題，但AnkiDroid 2.9及較舊版本中會無視這一設定。你可以在行末加入`!important`來解決：

```css
img {
  max-width: 300px !important;
  max-height: 300px !important;
}
```

若在調整影像大小後，標記的卡片上的星星也受到影響（比如圖片放大後星星過大），你可以加入以下程式碼來指定星星的樣式：

```css
img#star {
  ...;
}
```

你可以透過Chrome來以互動方式探索卡片樣式：

<https://addon-docs.ankiweb.net/porting2.0.html#webview-changes>

Anki 2.1.50或以上版本支援在編輯器中調整影像大小。

## 欄位樣式

預設的樣式會套用於整張卡片。你也可以為欄位單獨設定不同字型、顏色或其他。這在學習外文時很重要，比如在學習日文時，如果使用的是中文字型，有些日文寫法不一樣的漢字可能無法正確顯示。

假設你的卡片中有欄位「短語」，並要在欄位中使用Windows的「MS Gothic」字體。假設這是你當前的模板：

    {{短語}}是甚麼意思？

    {{備註}}

你需要把要修改樣式的文字包含在HTML程式碼內。例如在文字前加入以下程式碼：

    <div class=mystyle1>

然後在文字後加入：

    </div>

以上程式碼表示包含的文字要使用自訂樣式`mystyle1`，我們稍後再來建立該樣式。

修改後的模板如下：

    <div class=mystyle1>{{短語}}是甚麼意思？</div>

    {{備註}}

但是這樣，中文的部分也會使用日文字體，所以你可以只包含「短語」欄位：

    <div class=mystyle1>{{短語}}</div>是甚麼意思？

    {{備註}}

編輯模板後，前往樣式表。未做更動的樣式表應如下：

```css
.card {
  font-family: arial;
  font-size: 20px;
  text-align: center;
  color: black;
  background-color: white;
}
```

你可以把新的樣式放在最下方：

```css
.card {
  font-family: arial;
  font-size: 20px;
  text-align: center;
  color: black;
  background-color: white;
}

.mystyle1 {
  font-family: "MS Gothic";
}
```

花括號中可以加入任意樣式。要讓字型變大，你可以把樣式修改為這樣：

```css
.mystyle1 {
  font-family: "MS Gothic";
  font-size: 30px;
}
```

你也可以在牌組中加入自訂字型檔案，這樣你就不需要在電腦或手機上安裝只想要在Anki中使用的字型。進一步了解[字型安裝](#安裝字型-installing-fonts)。

## 音訊播放按鈕

當卡片中有音訊或TTS時，Anki會顯示一個播放按鈕。

若不需要這個按鈕，你可以在偏好設定中停用。

你可以在卡片樣式表中自訂按鈕外觀。如果你要縮小按鈕並加上顏色，可以加入程式碼：

```css
.replay-button svg {
  width: 20px;
  height: 20px;
}
.replay-button svg circle {
  fill: blue;
}
.replay-button svg path {
  stroke: white;
  fill: green;
}
```

## 文字方向

如果你使用阿拉伯文或希伯來文等由右至左書寫的文字，你可以在`.card`加入`direction`屬性：

```css
.card {
  direction: rtl;
}
```

這會更改整張卡片的書寫方向。你也可以使用HTML標籤來修改單個欄位：

    <div dir="rtl">{{正面}}</div>

要修改編輯器中的欄位書寫方向，請參閱〈[自訂欄位](../editing.md#自訂欄位-customizing-fields)〉章節。

## 其他HTML

模板可以包含任意HTML程式碼，因此一般網頁中使用的各種佈局都能被加入卡片中。例如表格、清單、影像、外部連結等例如你可以使用表格`table`來使卡片正背面分別顯示在左半邊和右半邊。

因HTML功能之多，此使用手冊無法一一涵蓋所有功能，請在網路上自行尋找HTML入門教學來進一步了解。

## 瀏覽器預覽樣式

如果你的卡片模板過於複雜，[卡片清單](../browsing.md#卡片筆記表格-cardnote-table)中的問題欄（正面）和答案欄（背面）可能難以閱讀。透過「瀏覽器預覽樣式」，你可以自訂一個僅限瀏覽器中顯示的模板，比如只顯示重要的欄位或者改變顯示順序。「瀏覽器預覽樣式」使用與普通卡片模板相同的語法。

使用這個選項時，當問題面文字包含在答案面開頭時，答案欄中不會顯示問題。假如問題是「日本在」、答案是「日本在東亞」，則答案欄僅會顯示「東亞」。

## 平台特定CSS

Anki定義了一些特殊的CSS類別，可為不同平台分別設定樣式。例如，你可以像這樣在不同平台上顯示不同的字型：

```css
/* Windows */
.win .example {
  font-family: "字型1";
}
/* macOS */
.mac .example {
  font-family: "字型2";
}
/* Linux電腦 */
.linux:not(.android) .example {
  font-family: "字型3";
}
/* Linux電腦和Android裝置 */
.linux .example {
  font-family: "字型4";
}
/* Android和iOS */
.mobile .example {
  font-family: "字型5";
}
/* iOS */
.iphone .example,
.ipad .example {
  font-family: "字型6";
}
/* Android */
.android .example {
  font-family: "字型7";
}
```

然後這樣設定模板：

```html
<div class="example">{{欄位}}</div>
```

若使用AnkiWeb複習，你還可以使用`.chrome`、`.gecko`和`.opera`等類別來在不同的瀏覽器中使用不同樣式。進一步了解[所有可用類別](http://rafael.adm.br/css_browser_selector/)。

## 安裝字型

如果你在公司/學校電腦上使用Anki，沒有權限安裝字型，或是使用行動裝置，不便安裝字型，你可以在Anki中加入字型檔。

Anki支援大多數字型格式，如TrueType (.ttf)、OpenType (.otf)、Web開放字型格式 (.woff) 等。

### 將字型檔加入媒體檔資料夾

下載Anki支援的字型檔之後，你需要將檔案加入媒體檔資料夾。

1. 重新命名檔案，在開頭加上一條底線，如`_arial.ttf`。檔名開頭的底線表示檔案用於模板中，這樣在Anki中執行「檢查媒體檔」時就不會被刪除。

2. 打開電腦上的檔案瀏覽器，並前往 [Anki資料夾](../files.md)，打開你的設定檔資料夾（預設名稱為「使用者1」）。

3. 將已重新命名的字型檔放入「collection.media」資料夾中。

### 更新模板

字型檔加入媒體檔資料夾後，請更新模板：

1. 在主畫面上方，按一下「**新增**」按鈕，然後使用左上方的按鈕來選取要修改的筆記類型。

2. 按一下「**卡片**」按鈕.

3. 在樣式表底部（原有的最後一個花括號`}`外），加入以下程式碼，請將`_arial.ttf`取代為你剛才加入的字型檔案名稱：

```css
@font-face {
  font-family: myfont;
  src: url("_arial.ttf");
}
```

`_arial.ttf`是字型檔的名稱而`myfont`是要在樣式表中使用的字型名稱。

使用上面的程式碼匯入字型後，要讓整張卡片使用新的字型，你可以在`.card`中的`font-family:`把字型改為`myfont`或你自己設定的名稱。要為欄位單獨自訂字型，請參閱上文中的〈[欄位樣式](#欄位樣式-field-styling)〉章節。

注意，字型檔名必須完全一致如果檔名為`arial.TTF`而你在卡片模板中輸入了`arial.ttf`，則將無法正常運作。

## 夜間模式

你可以為夜間模式下的卡片自訂不同樣式。

要讓夜間模式下的卡片背景為淺灰色，你可以這麼設定：

```css
.card.nightMode {
  background-color: #555;
}
```

如果你有文字使用了`.myclass`類別，加入以下程式碼可以讓這些文字僅在夜間模式下顯示為黃色：

```css
.nightMode .myclass {
  color: yellow;
}
```

## 捲動

根據預設，Ank會透過`id=answer`來找到包含答案的HTML元素，並在卡片背面自動捲動到這個元素你可以把`id=answer`移動至其他HTML元素上來改變自動捲動的終點或移除`id=answer`以停用自動捲動。

## JavaScript

因為Anki卡片本質上就是網頁，所以你也可以透過模板來在卡片上嵌入JavaScript。請參閱[此論壇貼文](https://forums.ankiweb.net/t/card-templates-user-input-101-buttons-keyboard-shortcuts-etc-guide/13756)來進一步了解。

JavaScript是一項進階功能，容易發生問題，因此**Anki不為JavaScript功能提供支援**。我們無法協助你編寫JavaScript程式碼，不保證當前可用的程式碼在未來不會失效。若無法自行解決相關問題，建議不要使用JavaScript。

不同Anki用戶端上的卡片顯示效果可能不一，因此你需要在不同平台上進行測試。多數用戶端的卡片是顯示在一個持續動態更新內容的網頁上，所以你的JavaScrip程式碼需要使用`document.getElementById()`等方法來更新文件內容而不是`document.write()`等方法。

`window.alert`這樣的函式可能不可用。Anki會在終端機寫入JavaScript錯誤，你需要在[控制台](https://addon-docs.ankiweb.net/console-output.html#console-output)中檢視錯誤訊息。你可以使用Chrome的「[檢查元素](https://addon-docs.ankiweb.net/debugging.html#webviews)」功能來為JavaScript程式碼偵錯。
