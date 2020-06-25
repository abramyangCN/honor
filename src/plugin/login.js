/* eslint-disable */
var oCD = {
  sLoginSiteCode: 'global',
  sLoginLang: 'en-gb',
  sLang: 'en',
  snationalCode: '',
  sCountry: 'gallery',
  sActivityName: 'global_all_gallery',
  childActivityName: 'global_all_gallery_travel',
  uploadImgUrl:
    'https://cuep-sg.hihonor.com/abroad/shootMatch/uploadOriginImage',
  getImgUrl:
    'https://cuep-sg.hihonor.com/abroad/shootMatch/listMatchImgInfoByPraiseDescStyle',
  getImgInfoUrl: 'https://cuep-sg.hihonor.com/abroad/shootMatch/getImgInfoById',
  addPraiseUrl: 'https://cuep-sg.hihonor.com/abroad/shootMatch/addPraise',
};
//判断登录
function isLogin() {
  if (getCookie('loginUid') === null || getCookie('loginUid') === '') {
    return false;
  }
  return true;
}

function loginBtn() {
  //测试地址
  var sLoginUrl = 'https://logintestlf.hwcloudtest.cn/oauth2/v2/authorize';
  var sRedirectUrl = 'https://cuep-sg.test.hihonor.com/abroad/login/auth';
  var sClientId = '101070239';
  var sCurrentUrl =
    window.location.origin + window.location.pathname + '?isLogin';
  var isLive = false;
  if (isLive) {
    //生产地址
    sLoginUrl = 'https://oauth-login5.cloud.huawei.com/oauth2/v2/authorize';
    sRedirectUrl = 'https://cuep-sg.hihonor.com/abroad/login/auth';
    sClientId = '100381747';
  }
  var loginUrl =
    sLoginUrl +
    '?response_type=code&client_id=' +
    sClientId +
    '&redirect_uri=' +
    encodeURIComponent(sRedirectUrl) +
    '%3Fcururl%3D' +
    encodeURIComponent(sCurrentUrl + '&sitecode=' + oCD.sLoginSiteCode) +
    '&scope%3Dhttps%3A%2F%2Fwww.huawei.com%2Fauth%2Faccount%2Fbase.profile&access_type=offline&lang=' +
    oCD.sLoginLang;
  window.location.href = loginUrl;
  window.dataLayer.push({
    event: 'accountLogin',
    pageType: 'eventpage',
    siteLocation: 'body',
  });
}

function getCookie(c_name) {
  if (document.cookie.length > 0) {
    var c_start = document.cookie.indexOf(c_name + '=');
    if (c_start != -1) {
      c_start = c_start + c_name.length + 1;
      var c_end = document.cookie.indexOf(';', c_start);
      if (c_end == -1) c_end = document.cookie.length;
      return unescape(document.cookie.substring(c_start, c_end));
    }
  }
  return '';
}

export { isLogin, loginBtn, getCookie };
