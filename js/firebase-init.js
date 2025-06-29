// Firebase SDK の読み込み
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Firebase の設定（セキュリティ上、apiKey は公開前に制限を必ず設定すること）
const firebaseConfig = {
  apiKey: "AIzaSyApk1xJT4UyYcvBCDhWWnRXgFmJcrpqMF8",
  authDomain: "nfcas-c9d16.firebaseapp.com",
  projectId: "nfcas-c9d16",
  storageBucket: "nfcas-c9d16.appspot.com",
  messagingSenderId: "975125467709",
  appId: "1:975125467709:web:cda1451db23c690ce65054"
};

// Firebase 初期化
const app = initializeApp(firebaseConfig);

// 各サービスの取得
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();

// 認証状態の監視
onAuthStateChanged(auth, user => {
  if (user) {
    console.log("ログイン中:", user.displayName);
    // ここでユーザー情報を画面に反映
  } else {
    console.log("未ログイン");
  }
});

// サインイン関数（HTMLボタンなどから呼び出し可能）
export function signInWithGoogle() {
  signInWithPopup(auth, provider)
    .then(result => {
      const user = result.user;
      console.log("ログイン成功:", user.displayName);
    })
    .catch(error => {
      console.error("ログイン失敗:", error);
    });
}