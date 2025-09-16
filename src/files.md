# 管理檔案與集合 [Managing Files and Your Collection <span style="font-size:18px;">(英文)</span>](https://docs.ankiweb.net/files.html)

<!-- toc -->

## 檢查集合 Checking Your Collection

你可以定期使用工具選單中的「檢查資料庫」功能來檢查集合檔，防止檔案損毀、重建部分內部架構以及最佳化檔案。

在 Anki 中刪除牌組或卡片時，標籤不會自動刪除。使用「檢查資料庫」時，你的標籤清單也會被重建，清理不再被使用的標籤。

Anki 每兩週會自動最佳化你的集合來改善效能。但自動最佳化不會檢查錯誤或重建標籤清單。

## 檔案位置 File Locations

**Windows**：較新版本的 Anki 檔案儲存在 `appdata` 資料夾中。你可以在檔案總管的網址列中輸入 `%APPDATA%\Anki2` 來打開。較舊版本的 Anki 檔案儲存在 `文件\Anki` 資料夾中。

**Mac**：較新版本的 Anki 檔案儲存在 `~/Library/Application Support/Anki2` 資料夾中。`資源庫(Library)` 資料夾預設是隱藏的。要打開 `資源庫`，請在 Finder 按住 Option 鍵，然後選擇「前往」>「資源庫」。較舊版本的 Anki 檔案儲存在 `文件/Anki` 資料夾中。

**Linux**：較新版本的 Anki 檔案儲存在 `~/.local/share/Anki2` 資料夾中，若你設定了自訂資料路徑則會在 `$XDG_DATA_HOME/Anki2` 資料夾中。較舊版本的 Anki 檔案儲存在
`~/Documents/Anki` 或 `~/Anki`資料夾中。

在 Anki 資料夾裡，程式檔案與設定檔層級的偏好設定儲存在 `prefs.db` 檔案中。

每個設定檔都儲存在單獨的資料夾內。設定檔資料夾包含：

- 筆記、牌組、卡片等，儲存在 `collection.anki2` 檔案中

- 音訊和影像，儲存在 `collection.media` 資料夾中

- 備份資料夾

- 系統檔案

Anki 執行時，請勿修改、複製或移動檔案，否則可能會造成集合等檔案損毀。

## 啟動選項 Startup Options

如果你一台電腦上的集合損毀了，但另一台電腦的集合完好，你可以在打開 Anki 時按住  <kbd>Shift</kbd> 鍵來略過自動同步，然後再使用單向同步（完整同步）選項。另外，按住 <kbd>Shift</kbd> 鍵還可以暫時停用附加元件，當附加元件出現錯誤時可以避免發生更多問題。

It is possible to specify a custom folder location during startup. This
is an advanced feature that is primarily intended to be used with
portable installations, and we recommend you use the default location in
most circumstances.

The syntax to specify an alternate folder is as follows:

    anki -b /path/to/anki/folder

- If you have multiple profiles, you can pass -p &lt;name&gt; to load
  a specific profile.
- If you pass -p some-fake-name, Anki will show the profile screen on startup.
  If no profile is provided, the last-used profile is loaded.

- To change the interface language, use -l &lt;iso 639-1 language
  code&gt;, such as "-l ja" for Japanese.

If you always want to use a custom folder location, you can modify your
shortcut to Anki. On Windows, right-click on the shortcut, choose
Properties, select the Shortcut tab, and add "-b
\\path\\to\\data\\folder" after the path to the program, which should
leave you with something like

    "C:\Program Files\Anki\anki.exe" -b "C:\AnkiDataFolder"

You can also use this technique with the -l option to easily use Anki in
different languages.

On Windows, you should use a backslash (\\) not a forward slash (/).

On a Mac there is no easy way to alter the behaviour when clicking on
the Anki icon, but it is possible to start Anki with a custom base
folder from a terminal:

    open /Applications/Anki.app --args -b ~/myankifolder

Alternatively, you can define the environment variable "ANKI_BASE".
On Windows, you can define the environment variable with:

    set "ANKI_BASE=C:/path/to/AnkiDataFolder"

On Linux and macOS, you can use:

    export ANKI_BASE="/path/to/AnkiDataFolder"

## 檔案同步 File Syncing

使用第三方同步服務來同步 Anki 資料夾可能會造成資料庫損毀。

如果僅需同步媒體檔，你可以將外部資料夾連結至媒體檔資料夾中。

若要使用第三方服務來同步集合檔，建議建立指令碼，在打開 Anki 時複製雲端檔案到本機資料夾，關閉時再複製回去。

## 網路檔案系統 Network Filesystems

使用網路檔案系統可能會造成資料庫損毀。如果必須使用網路檔案系統，請定期使用「檢查資料庫」工具來檢查有無損毀。

## 使用隨身碟執行 Running from a Flash Drive

在 Windows 上，你可以在隨身碟中安裝 Anki 為可攜式軟體。以下步驟假設你的隨身碟為 G 槽。

- 複製 `\Program Files\Anki` 資料夾到隨身碟上，變成 `G:\Anki`。

- 建立一個文字檔，命名為 `G:\anki.bat`，內容為：

  `g:\anki\anki.exe -b g:\ankidata`

如果不想要看見開啟時的命令列視窗，請將內容改為：

    start /b g:\anki\anki.exe -b g:\ankidata

- 按兩下 `anki.bat` 來啟動 Anki，使用者資料儲存於 `G:\ankidata`。

不能去除磁碟機代號，輸入 `\anki\anki.exe` 時將無法同步。

FAT32 格式的隨身碟可能無法同步媒體檔。請將隨身碟格式化為 NTFS 以確保能正常同步。

## 備份 Backups

請參閱〈[備份](./backups.md)〉。

## 無法存取硬碟 Inaccessible Harddisk

啟動時，如果 [Anki 資料夾](#file-locations)無法寫入， Anki 將顯示一則訊息並自動關閉。如果不清楚如何修正存取權限，請求助電腦專家。

## 暫存資料夾權限 Permissions of Temp Folder

Anki 使用系統暫存資料夾來暫時儲存檔案。如果這個資料夾的權限被某些軟體（如防毒軟體）更動，Anki 將無法正常運作。

If you're on a Windows 7 machine, the general steps to fix the problem
are listed below. As this is somewhat complicated, please ask someone
knowledgeable about Windows if you are not sure.

1. Click on the start bar, and type in %temp% (including the percents),
   then hit <kbd>Enter</kbd>.

2. Go up one folder, and locate the temp folder. Right click on it, and
   choose Properties.

3. In the security tab, click on Advanced.

4. Click on the Owner tab. If you're not listed as the owner, click the
   button to take ownership.

5. On the permissions tab, ensure that you have full control. On a
   default W7 install the control will actually be inherited from
   c:\\users\\your-username.

## 集合損毀 Corrupt Collections

Anki 使用的檔案格式通常不會在程式或電腦崩潰時受到太大的影響，但在少數情況下，集合還是有可能會損毀，比如檔案在 Anki 執行時被修改、檔案儲存在雲端硬碟或程式錯誤。

When you run Tools&gt;Check Database, you will receive a message if Anki
detects the file has been corrupted. **The best way to recover from this
is to restore from the most recent [automatic backup](#backups)**, but
if your backup is too old, then you can attempt to repair the corruption
instead.

On Linux, make sure sqlite3 is installed. On a Mac, it should be
installed already. On Windows, download
<http://www.sqlite.org/sqlite-3_6_23.zip>.

Next, create a backup of your collection.anki2 file, in case something
goes wrong with the steps below.

### Linux/macOS

Open a terminal, change to the folder your collection is located in, and
type:

    sqlite3 collection.anki2 .dump > dump.txt

Open the resulting dump.txt file in a text editor, and look at the final
line. If it reads "rollback;", change it to "commit;"

Then run the following in a terminal:

    cat dump.txt | sqlite3 temp.file

Make sure you use temp.file - do not put collection.anki2 on the right,
or you will blank out the file. When you're done, proceed to the final
step.

### Windows

Copy the `sqlite3.exe` program and your deck to your desktop. Then go to
**Start&gt;Run** and type in `cmd.exe`.

If you're on a recent Windows, the command prompt may not start on your
desktop. If you don't see desktop displayed in the command prompt, type
something like the following, replacing 'administrator' with your login
name.

    cd C:\Users\Administrator\Desktop

Then type:

    sqlite3 collection.anki2 .dump > dump.txt

Open the resulting dump.txt file in a text editor, and look at the final
line. If it reads "rollback;", change it to "commit;"

Then run the following in a terminal:

    type dump.txt | sqlite3 temp.file

Make sure you use temp.file - do not put collection.anki2 on the right,
or you will blank out the file. When you're done, proceed to the final
step.

### Final Step

Check that you didn't get an error message, and that temp.file is not
empty. The procedure optimizes the collection in the process, so it's
normal for the new file to be somewhat smaller than the old one.

When you've confirmed the file is not empty:

- rename the original collection.anki2 file to something else

- rename temp.file to collection.anki2

- move collection.anki2 back into your collection folder, overwriting
  the old version

- start Anki and go to Tools&gt;Check Database to make sure the
  collection has been successfully restored.
