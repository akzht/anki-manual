# 搜尋 Searching

<!-- toc -->

在 Anki 中，瀏覽畫面和篩選牌組使用相同的方法進行搜尋。同樣的方法也可以用來調整 FSRS 最佳化範圍。

## 簡單搜尋 Simple searches

在搜尋方塊中輸入文字後，Anki 將尋找所有筆記欄位，並顯示符合的卡片。搜尋結果不包含標籤。（請見[後文](#tags-decks-cards-and-notes)來了解如何搜尋標籤）以下是一些搜尋條件範例：

`dog`\
搜尋「dog」——也會符合類似「doggy」和「underdog」的字。

`dog cat`\
搜尋同時包含「dog」和「cat」的筆記，如「raining cats and dogs」。

`dog or cat`\
搜尋至少包含「dog」和「cat」其一的筆記。

`dog (cat or mouse)`\
搜尋包含「dog」，且至少包含「cat」和「mouse」其一的筆記。即同時包含「dog」和「cat」或者同時包含「dog」和「mouse」。

`-cat`\
搜尋不包含「cat」的筆記。

`-cat -mouse`\
搜尋既不包含「cat」，也不包含「mouse」的筆記。

`-(cat or mouse)`\
同上。

`"a dog"`\
搜尋包含「a dog」的筆記，如「atta dog」。而「dog a」或「adog」則不符合條件。

`-"a dog"`\
搜尋不包含「a dog」的筆記。

`d_g`\
尋找包含「d, &lt;一個字元&gt;, g」的筆記，如「dog」、「dig」、「dug」等。

`d*g`\
尋找包含「d, &lt;零或多個字元&gt;, g」的筆記，如「dg」、「dog」、「dung」等。

`w:dog`\
搜尋單字「dog」，而不是 d, o, g 三個字元——即「dog」會符合搜尋條件，但「doggy」、「underdog」不會。僅限 Anki 2.1.24+、AnkiMobile 2.1.61+ 或 AnkiDroid 2.17+ 版本。文字格式可能改變單字邊界，例如，搜尋 `w:exam` 時將會符合「**exam**ple」，因為「exam」包含在粗體格式中。

`w:dog*`\
符合「dog」和「doggy」，但不符合「underdog」。

`w:*dog`\
符合「dog」和「underdog」，但不符合「doggy」。

以上需要注意：

- 搜尋條件應以空白分隔。

- 輸入多個搜尋條件時，Anki 將尋找符合所有條件的筆記——默認在每個條件之間加入 `and`。在 Anki 2.1.24+、AnkiMobile 2.1.60+ 及 AnkiDroid 2.17+ 版本中，你也可以輸入這條 `and`（`dog and cat` 等於 `dog cat`），但在較早版本中，`and` 會被視為一個正常的單字進行搜尋。

- 如果僅需筆記符合一個條件，你可以使用 `or`。

- 你可以在搜尋條件前加入一個半形連字號 (`-`) 來搜尋不符合這個條件的筆記。

- 你可以用半形括號來對搜尋條件分組。這一做法在混用 `and` 和 `or` 時尤為重要，例如，上文範例中的 `dog (cat or mouse)` 將符合「dog cat」或「dog mouse」，若去掉括號，搜尋條件將變成「dog and cat」或「mouse」。

- Anki is only able to search within formatting in the [sort field](editing.md#自訂欄位-customizing-fields) you’ve configured. For example, if you add
  "**exa**mple" to one of your fields, with the "exa" part in bold, this will not be matched when
  searching for `example` unless that field is the sort field. If a
  word is not formatted, or the formatting does not change in the
  middle of the word, then Anki will be able to find it in any field.

- Standard searches are case insensitive for Latin characters - a-z will
  match A-Z, and vice versa. Other characters such as Cyrillic are case sensitive
  in a standard search, but can be made case insensitive by searching on a word
  boundary or regular expression (`w:`, `re:`).

## 限制欄位 Limiting to a field

You can also ask Anki to match only if a particular field contains some
text. Unlike the previous search examples, searching in fields requires an exact
match by default.

`正面:dog`\
find notes with a Front field of exactly "dog". A field that says "a
dog" will not match.

`"animal front:a dog"`\
finds notes where the "Animal Front" field is exactly "a dog". The double quotes are
mandatory: see [later in this section](#matching-special-characters).

`正面:*dog*`\
find notes with Front field containing dog somewhere

`front:`\
`正面:`  
尋找「正面」欄位為空白的筆記

`正面:_*`\
尋找「正面」欄位不為空白的筆記

`正面:*`\
尋找擁有「正面」欄位的筆記，無論是否空白

`正*:text`\
在名稱開頭為「正」的欄位中尋找筆記。僅支援在 Anki 2.1.24+ 或 AnkiMobile 2.1.60+ 版本上使用。

## 標籤、牌組、卡片和筆記 Tags, decks, cards and notes

`tag:animal`\
finds notes with the tag "animal", or subtags like "animal::mammal".

`tag:none`\
finds notes with no tags.

`tag:ani*`\
finds notes with tags starting with "ani".

`deck:french`\
find cards in a deck called "French", or its subdecks like "French::Vocab".

`deck:french -deck:french::*`\
finds cards in "French", but not its subdecks.

`deck:"french vocab"`\
searching when the deck name has a space.

`"deck:french vocab"`\
same as earlier.

`deck:filtered`\
filtered decks only.

`-deck:filtered`\
normal decks only.

`preset:"Default"`\
cards in all decks that use the "Default" deck options preset.
Requires Anki 23.10+, AnkiMobile 23.10+ or AnkiDroid 2.17+.

`card:forward`\
finds cards created by a card type named "Forward".

`card:1`\
searches for cards by card type number, e.g. to find the second cloze
deletion for a note, you’d use `card:2`

`note:basic`\
searches for cards created with a note type named "Basic".

## Ignoring accents/combining characters

Requires Anki 2.1.24+, AnkiMobile 2.0.60+ or AnkiDroid 2.17+.

You can use `nc:` (nc stands for "no combining") to make Anki ignore combining characters. For example:

`nc:uber`\
matches notes with "uber", "über", "Über" and so on.

`nc:は`\
matches "は", "ば", and "ぱ".

Searches that ignore combining characters are slower than regular searches.

## Regular expressions

Anki 2.1.24+, AnkiMobile 2.0.60+ and AnkiDroid 2.17+ support searching in notes with "regular expressions",
a standard and powerful way of searching in text.

Start a search with `re:` to search using regular expressions. To make things easier, Anki will
treat the following as [raw input](#raw-input), so bear in mind the rules listed there.

Some examples:

`"re:(some|another).*thing"`\
finds notes that have "some" or "another" on them, followed by 0 or more characters, and then "thing".

`re:\d{3}`\
finds notes that have 3 digits in a row.

Regular expressions can also be limited to a specific field. Please note that unlike the normal searches
in a specific field, regular expressions in fields don't require an exact match:

`front:re:[a-c]1`\
matches uppercase or lowercase a1, B1 or c1 that occurs anywhere in the "Front" field.

`front:re:^[a-c]1$`\
same as the previous example, but will not match if any other text falls before or after a1/b1/c1.

Anki 2.1.50+ supports regular expressions for tags:

`tag:re:^parent$`\
finds notes with the exact tag "parent", disregarding any child tags like "parent::child".

`"tag:re:lesson-(1[7-9]|2[0-5])"`\
finds notes with tags "lesson-17" through "lesson-25".

For more information on regular expressions, see [this website](<https://regexone.com/lesson/introduction_abcs>).

Some things to be aware of:

- The search is case-insensitive by default; use `(?-i)` at the start to turn on case sensitivity.
- Some text like spaces and newlines may be represented differently in HTML - you can
  use the HTML editor in the editing screen to see the underlying HTML contents.
- For the specifics of Anki's regex support, see the [regex crate documentation](<https://docs.rs/regex/1.3.9/regex/#syntax>).

## Card state

`is:due`\
review cards and learning cards waiting to be studied.

`is:new`\
new cards.

`is:learn`\
cards in learning.

`is:review`\
reviews (both due and not due) and lapsed cards.

`is:suspended`\
cards that have been [automatically](leeches.md) or manually suspended.

`is:buried`\
cards that have been buried, either [automatically](studying.md#關聯卡片和推遲-siblings-and-burying) or
manually

Cards that have [lapsed](deck-options.md#遺忘-lapses) fall into several of the previous categories, so it may
be useful to combine different search terms to get more precise results:

`is:learn is:review`\
cards that have lapsed and are awaiting relearning.

`-is:learn is:review`\
review cards, not including lapsed cards.

`is:learn -is:review`\
cards that are in learning for the first time.

## Flags

`flag:1`\
cards with a red flag.

`flag:2`\
cards with an orange flag.

`flag:3`\
cards with a green flag.

`flag:4`\
cards with a blue flag.

`flag:5`\
cards with a pink flag.

`flag:6`\
cards with a turquoise flag.

`flag:7`\
cards with a purple flag.

## Card properties

`prop:ivl>=10`\
cards with interval of 10 days or more.

`prop:due=1`\
cards due tomorrow.

`prop:due=-1`\
cards due yesterday that haven’t been answered yet.

`prop:due>=1`\
all cards due in the future, including tomorrow.

`prop:due<=-1`\
all  overdue cards.

`prop:due>-1 prop:due<1`\
cards due yesterday, today and tomorrow.

`prop:reps<10`\
cards that have been answered less than 10 times.

`prop:lapses>3`\
cards that been lapsed more than 3 times.

`prop:ease!=2.5`\
cards easier or harder than default ease.

`prop:cdn:d>5`\
cards with the value of `d` in custom data (usually refers to difficulty in FSRS) greater than 5 (requires Anki 2.1.64+).

`prop:cds:v=reschedule`\
cards with the string `v` in custom data equal to `reschedule` (requires Anki 23.10+).

The following searches require Anki 23.10+ and FSRS enabled:

`prop:s>21`\
cards with stability greater than 21 days.

`prop:d>0.3`\
cards with difficulty greater than 0.3.

`prop:r<0.9`\
cards with retrievability less than 0.9.

## Recent Events

### Added

`added:1`\
cards added today.

`added:7`\
cards added in the last 7 days.

The check is made against card creation time rather than note creation
time, so cards that were generated within the time frame will be
included even if their notes were added a long time ago.

### Edited

`edited:n`\
cards where the note text was added/edited in the last n days.

This requires Anki 2.1.28+ or AnkiMobile 2.0.64+.

### Answered

`rated:1`\
cards answered today.

`rated:1:2`\
cards answered Hard (2) today.

`rated:7:1`\
cards answered Again (1) in the last 7 days.

`rated:31:4`\
cards answered Easy (4) in the last 31 days.

Anki 2.1.39+ supports rating searches over 31 days.

### First Answered

Requires Anki 2.1.45+.

`introduced:1`\
cards answered for the first time today.

`introduced:365`\
cards answered for the first time within the last 365 days.

## Matching special characters

If you're using a version earlier than Anki 2.1.36 the following searches may not work.

As shown in the previous section, some characters like `*`, `_` and `"` have a
special meaning in search. If you need to locate those characters in a search,
you need to tell Anki not to treat them specially. This is called "escaping a character" and is primarily done by using double quotes and backslashes.

- _Space_\
  To match something that includes spaces, enclose the `"entire term"` in double
  quotes. If it is a colon search, you also have the option to only quote the
  `part:"after the colon"`.

- `And`/`Or`\
  To search for these words, wrap them with double quotes. For example, `dog "and" cat` searches for "dog", "cat" and the word "and".
  If you wrap the entire search term with quotes like in the previous example, you do not need to escape `and` or `or`.

- `"`, `*` and `_`\
  Add a backslash before these characters to treat them literally. For example,
  `_` will match any single character, but `\_` matches only an actual underscore.

- `\`\
  Because a backlash is used to remove the special meaning from other characters,
  it too is treated specially. If you need to search for an actual backslash,
  use `\\` instead of `\`.

- `(` and `)`\
  You can search for parentheses by enclosing the entire term in quotes,
   by using a backslash, or both at the same time. For example, `"(text)"`, `\(text\)` and
  `"\(text\)"` are all equivalent searches, and search for `(text)`.

- `-`\
  Starting a search term with `-` usually inverts it: `-dog` matches everything
  except dog for example. If you instead wish to include an actual hyphen,
  you can either use a backslash, or include the text in quotes. For example,
  `\-free` or `"-free"` will match "guilt-free" and "cruelty-free".

- `:`\
  Colons have to be escaped using backslashes unless they are preceded by another, unescaped colon.
  For example, `w:3:30` searches for "3:30" on word boundary and doesn't require you to use a backslash.
  However, if you don't use a colon search, the colons need to be escaped like this: `3\:30`.

- `&`, `<`, and `>`\
  `&`, `<`, and `>` are treated as HTML when searching in Anki, and as such, searches
  containing them don't work as expected. However, you can search for them by using their
  corresponding HTML entity names (`&amp;` for `&`, `&lt;` for `<`, and `&gt;` for `>`).
  For example, searching `&amp;text` searches for a note with `&text` in a field.

### Raw input

Text preceded by certain keywords (like `re:`) will be treated as raw input. That is,
the characters listed above largely lose their special meaning. In such a context, only
a minimum of escaping is required to prevent ambiguity:

- Double quotes (`"`) must be escaped.

- Spaces and unescaped parentheses require the search term to be quoted.

- The search term must not end in an odd number of backslashes.

## Object IDs

`nid:123`\
the note with note id 123.

`cid:123,456,789`\
all cards with card ids 123, 456, or 789.

Note and card IDs can be found in the [card info](stats.md) dialog in the
browser. These searches may also be helpful when doing add-on
development or otherwise working closely with the database.
