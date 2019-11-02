# prof(プロス)


### これは新しいjavascriptのフレームワークです。

-----
## 使い方 

#### このリポジトリをクローンしてください

    git@github.com:gutsmine/pros

#### あなたのプロジェクトに埋め込んでください。

    <script src="pros.js"></script>
### もしくは
    
    fetch('./pros.js').then(r=>r.text()).then(t=>eval(t))

----

## 構文

### html

    window.document
    
  #### と同じ形になります。

    var document = html.input.value;
    
### gebi(変数名, 取得する要素のid)

    document.getElementById(data)
  #### と同じ形になります。
    
    
   ## cli(要素変数, 実行する関数, 引数)
    要素変数.onclick(function(引数){実行する関数}
   #### と同じ形になります。 
   
   ##### また、引数は、変数で複数指定可能にする予定。
   
   ## che(要素変数, 実行する関数, 引数)
    要素変数.addEventlistener("chenge",(event)=>{
    関数名(引数)
    })
   #### と同じ形になります。
   
   ## kup(要素変数, 関数名, 引数)
   
    要素変数.addEventlistener("keyup",(event)=>{
    if(event.isComposing){
    関数名(引数)
    }
    })  
   #### と同じ形になります。
   
   ## inhtm(要素変数, テキスト)
    要素変数.innerHTML=テキスト;
   #### と同じ形になります。
 -----
   現在の開発途中のため、不具合が発生する場合があります。
 
 このリポジトリはMIT LICENSE (本ライセンス)に基づいてライセンスされます。あなたがこのファイルを使用するためには、本ライセンスに従わなければなりません。本ライセンスのコピーは下記の場所から入手できます。

https://github.com/gutsmine/pros/blob/master/LICENSE
