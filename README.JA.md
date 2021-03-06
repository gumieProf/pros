# prof(プロス)

<img src="pros.png" style="zoom:50%;" />

[![install size](https://packagephobia.now.sh/badge?p=pros)](https://packagephobia.now.sh/result?p=pros) <img src="https://img.shields.io/npm/dt/pros">

### これは新しい javascript のフレームワーク

---

## 使い方

#### このリポジトリをクローンしてください

    git@github.com:gutsmine/pros

#### もしくは npm で以下のコマンドを実行してください

```
npm install pros
```

#### あなたのプロジェクトに埋め込んでください。

    <script src="pros.js"></script>

### もしくは

    var pros = require('pros');

---

## 構文

### 以下の構文は"pros.〇〇(引数)"をという形で入力してください。

### getid(取得する要素の id)

#### id から要素を取得します。

    var 変数名 = document.getElementById(取得するid);

#### と同じ形になります。

#### getclass、getname も同様に使えます。

## click(要素変数, 実行する関数, 引数)

#### 要素をクリック処理できるようにします。

    要素変数.onclick(function(引数){実行する関数}

#### と同じ形になります。

## chage(要素変数, 実行する関数, 引数)

#### 要素が変更されたら処理できるようにします。

    要素変数.addEventlistener("chenge",(event)=>{
    関数名(引数)
    })

#### と同じ形になります。

## keyup(要素変数, 関数名, 引数)

#### 要素内でキーボードが押されたら処理できるようにします。

    要素変数.addEventlistener("keyup",(event)=>{
    if(event.isComposing){
    関数名(引数)
    }
    })

#### と同じ形になります。

## html(要素変数, テキスト)

#### 要素のテキストを変更します。

    要素変数.innerHTML=テキスト;

#### と同じ形になります。

## newobj(追加するテキスト)

新しいオブジェクト変数を作成します。

```
var 変数名 = {追加するテキスト};
```

#### と同じ形になります。

## addobj(追加するテキスト)

#### オブジェクト変数に追加します。

```
変数名.push(追加するテキスト);
```

#### と同じ形になります。

#### newlist や addlist もあります。

## mergevar(変数 1, 変数 2)

#### 変数を統合します。

```
var 追加する変数名 = 変数1 +  変数2;
```

#### と同じ形になります。

### getvalue(要素名, 取得方法 {id や class、name})

#### 要素の value 値を取得します。

```
var Variable name = document.getElementBy〇〇(element);
```

---

##### getid や getclass、getname のような要素を取得するものや、addvar や newlist、newobj、margevar のような変数関係のものは以下のように入力してください。

```
var 変数名 = pros.プロパティ(引数);
```

### pros.(オプション)の代わりに ps.(オプション)にすることができます。

---

### 現在の開発途中のため、不具合が発生する場合があります。

このリポジトリは MIT LICENSE (本ライセンス)に基づいてライセンスされます。あなたがこのファイルを使用するためには、本ライセンスに従わなければなりません。本ライセンスのコピーは下記の場所から入手できます。

https://github.com/gutsmine/pros/blob/master/LICENSE

<img src="gutsminemade-by.png" style="zoom:50%;" />
