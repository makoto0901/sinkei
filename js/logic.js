(function() {
  const pageId = location.search.substring(1);

  if (pageId.indexOf("roomid=") != -1) {
    //
    pageId = pageId.substring(pageId.indexOf("roomid=") + 1, pageId.length);
  } else {
    // エラー画面に遷移
    window.location.href = 'file:///Users/macuser/workspace/game/sinkei/notfound.html';
  }



  console.log(pageId);
  // urlパラメータを取得して、動的にスイッチを作る。その内容でストレージ保存

  // webストレージに確保する

  // 1~53の連番を攪拌した配列を用意

  // for で datasetに対して値を突っ込む。

  // idにデフォルトimgを突っ込む

  // clickイベントも付けとく

  // イベントの内容はクリック後、IDをdatasetと差し替えて、1まいめに対するmap とキーの組み合わせに仏国

    // classのリムーブは可能

    //ストレージに登録するのは
    //ページごとに、1から53の連番のtrue falseか・これで画面の再現が可能

})();