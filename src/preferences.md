# 偏好設定 [Preferences <span style="font-size:18px;">(英文)</span>](https://docs.ankiweb.net/preferences.html)

<!-- toc -->

你可以在 Windows/Linux 版本中的「工具」選單或 Mac 上的「Anki」選單中找到偏好設定。

## 外觀 Appearance

### 一般 General

**語言**\
更改顯示語言。要幫 Anki 改進翻譯，請前往 <https://translating.ankiweb.net/>

### 使用者介面User Interface

**佈景主題**\
Anki 介面使用深色（夜間）模式時，卡片會變為黑底白字。你可能需要修改部分卡片模板才能使這個功能正確運作，請參閱〈[夜間模式](templates/styling.md#夜間模式-night-mode)〉章節來進一步了解。

2.1.50 及以上版本還可以選擇跟隨系統設定來自動切換深色/淺色模式。

**使用者介面大小**\
若介面顯示元素過大或過小，可以嘗試調整這項設定。

**重設視窗大小**\
將視窗大小和位置重設為預設。

**視訊驅動程式**\
Anki 的函式庫需要透過視訊驅動程式以繪製螢幕上的圖形。由於各種軟硬體的設定不盡相同，各個驅動程式在你的機器的運作效果可能不一。ANGLE 和 OpenGL 效能比軟體較佳，但在某些系統上可能無法正常運作。在 Mac 上，通常應使用 OpenGL 選項。

注意：如果你正在使用 2.1.50+ (Qt6) 版本，請前往[這個頁面](./platform/windows/display-issues.md#qt6)。

### 減少干擾 Distractions

這些選項可以移除複習時畫面中不必要的干擾：

- 複習時隱藏頂部列和底部列。
- 極簡模式：使介面更加緊湊/簡約。
- 減少動態效果：停用部分過場效果和動畫。
- 切換本機樣式/Anki 佈景主題。（僅限 Mac/Linux）

## 複習 Review

### 排程器 Scheduler

**次日始於**\
控制 Anki 從何時開始顯示下一天的卡片。使用預設的「4 時」時，在半夜 12 點左右學習時就不會跟第二天的卡片混到一起。如果你熬夜到很晚或者很早起床，你可以將這個選項設定在你平常的睡眠時間範圍內。Controls when Anki should start showing the next day’s cards. The default
setting of 4AM ensures that if you’re studying around midnight, you won’t have
two days' worth of cards shown to you in one session. If you stay up very late
or wake up very early, you may want to adjust this to a time you’re usually
sleeping. Note that the start of the next day is relative to your current timezone.
Also note that any cards that cross a day boundary [will appear at the start of
the day they are scheduled for](./deck-options.md#day-boundaries), just like review cards do.

**Learn ahead limit**\
Tells Anki how to behave when there is nothing left to study in the current deck
but cards in learning. The default setting of 20 minutes tells Anki that cards
should be shown early if they have a delay of less than 20 minutes and there’s
nothing else to do. If you set this to 0, Anki will always wait the full delay,
showing the congratulations screen until the remaining cards are ready to be
reviewed.

**Timebox time limit**\
Timeboxing is a technique to help you focus by dividing a longer activity (such
as a 30 minute study session) into smaller blocks. If you set the timebox time
limit to a non-zero number of minutes, Anki will periodically show you how many
cards you’ve managed to study during the prescribed time limit.

### Review

**Show play buttons on cards with audio**\
Whether a clickable (re)play button will be shown in the review screen
for cards with audio.

**Interrupt current audio when answering**\
Whether a currently playing audio file should be stopped when answering
a card.

**Show remaining card count**\
Disable this option to hide the card count at the bottom of the screen.

**Show next review time above answer buttons**\
Useful to know how far in the future your cards are being pushed.

**Spacebar (or enter) also answers card**\
Defines whether a press on the space bar (or the enter key) also answers cards.

## Editing

### Editing

**Paste clipboard images as PNG**\
By default Anki pastes images on the clipboard as JPG files, to save disk space.
You can use the option to paste as PNG images instead. PNG images support
transparent backgrounds and are lossless, but they usually result in much larger
file sizes.

**Paste without Shift strips formatting**\
By default, formatting like bold and colors are kept when pasting,
unless the <kbd>Shift</kbd> key is held down. This option reverses the behaviour.

**Default deck**\
Controls how note types and decks interact. The default of "When adding, default
to current deck" means that Anki saves the last-used note type for each deck and
selects it again then next time you choose the deck (and, in addition, will
start with the current deck selected when choosing Add from anywhere). The other
option, "Change deck depending on note type," saves the last-used deck for each
note type (and opens the add window to the last-used note type when you choose
Add). This may be more convenient if you always use a single note type for each
deck.

The last used deck/notetype is updated when you add a card. If you change the deck
and close the add window without adding a card, it won't be saved.

### Browsing

**Default search text**\
Allows you to customize the starting search text in the browser (eg, to start
with "deck:current").

**Ignore accents in search (slower)**\
When enabled, simple text searches automatically [ignore accents](./searching.md#ignoring-accentscombining-characters).

### Import/Export

**Legacy import/export handling**\
If enabled, legacy (pre 2.1.55) import / export code will be used. It is recommended to deactivate this option.

## Syncing

This tab contains options related to syncing with AnkiWeb.

### Synchronisation

**Synchronize audio and images too**\
When enabled, media will also be synced with AnkiWeb.

**Automatically sync on profile open/close**\
Disable this if you don't want an automatic sync with AnkiWeb when opening / closing a [profile](./profiles.md).

**Periodically sync media**

**On next sync, force changes on one direction**\
When this option is enabled, the next sync will
ask you whether you wish to upload or download. This is useful if
you have made some changes accidentally, and wish to overwrite them
with an older version that is on AnkiWeb.

### AnkiWeb Account

When logged in, clicking on Log Out will log you out.

### Self-hosted Sync Server

For info on the custom sync server option, see [this section](./sync-server.md).

## Backups

Please see [this](backups.md#automatic-backups) section of the manual.
