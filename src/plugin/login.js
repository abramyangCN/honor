/* eslint-disable */

import $ from 'jquery';

var oCD = {
  sLoginSiteCode: 'global',
  sLoginLang: 'en-gb',
  sLang: 'en',
  snationalCode: '',
  sCountry: 'gallery',
  sActivityName: 'MICROSOFT_365',
  childActivityName: '',
  uploadImgUrl:
    'https://cuep-sg.hihonor.com/abroad/shootMatch/uploadOriginImage',
  getImgUrl:
    'https://cuep-sg.hihonor.com/abroad/shootMatch/listMatchImgInfoByPraiseDescStyle',
  getImgInfoUrl: 'https://cuep-sg.hihonor.com/abroad/shootMatch/getImgInfoById',
  addPraiseUrl: 'https://cuep-sg.hihonor.com/abroad/shootMatch/addPraise',
};

var HONOROBSSDK = {
  accessKeyId: '', // Access Key
  secretAccessKey: '', // Secret Key
  securityToken: '', // Security Token
  bucketName: '', // Bucket Name
  obsClient: null, // OBS Client
  // 初始化
  init: function (cuepUrl, obsServer) {
    this.getToken(cuepUrl);
    this.getBucketName(cuepUrl);

    // 创建ObsClient实例
    this.obsClient = new ObsClient({
      access_key_id: this.accessKeyId,
      secret_access_key: this.secretAccessKey,
      security_token: this.securityToken,
      server: obsServer,
    });
    console.log('OBS:', this.obsClient);
  },
  //获取token
  getToken: function (cuepUrl) {
    var that = this;
    $.ajax({
      url: cuepUrl + '/abroad/newYoutShootMatch/getUserToken',
      type: 'GET',
      async: false,
      dataType: 'json',
      success: function (info) {
        if (info.success) {
          var jsonInfo = JSON.parse(info.resultDesc);
          that.accessKeyId = jsonInfo.credential.access;
          that.secretAccessKey = jsonInfo.credential.secret;
          that.securityToken = jsonInfo.credential.securitytoken;
        }
      },
    });
  },
  //获取桶名称
  getBucketName: function (cuepUrl) {
    var that = this;
    $.ajax({
      url: cuepUrl + '/abroad/newYoutShootMatch/getBucketName',
      type: 'GET',
      async: false,
      dataType: 'json',
      success: function (info) {
        if (info.success) {
          that.bucketName = info.resultDesc;
        }
      },
    });
  },
  /*
   * 文件上传
   * @param fileName：文件名称，需要保持唯一性
   * @param fileData：文件数据
   * @param successCallback：成功时的回调事件
   * @param failCallback：失败时的回调事件
   */
  uploadFile: function (fileName, fileData, successCallback, failCallback) {
    var that = this;
    that.obsClient.putObject(
      {
        Bucket: that.bucketName,
        Key: fileName,
        SourceFile: fileData,
      },
      function (err, result) {
        if (err) {
          // 删除失败
          console.error('Upload Error-->' + err);
          if (typeof failCallback == 'function') {
            failCallback();
          }
        } else {
          console.log(
            'Upload Success Status-->' + result.CommonMsg.Status,
            result
          );
          if (result.CommonMsg.Status == '200') {
            //删除成功
            if (typeof successCallback == 'function') {
              successCallback();
            }
          }
        }
      }
    );
  },
  /*
   * 文件删除
   * @param fileName：文件名称，需要保持唯一性
   * @param successCallback：成功时的回调事件
   * @param failCallback：失败时的回调事件
   */
  deleteFile: function (fileName, successCallback, failCallback) {
    var that = this;
    that.obsClient.deleteObject(
      {
        Bucket: that.bucketName,
        Key: fileName,
      },
      function (err, result) {
        if (err) {
          console.log('Delete Error-->' + err);
          if (typeof failCallback == 'function') {
            failCallback();
          }
        } else {
          console.log('Delete Success Status-->' + result.CommonMsg.Status);
          if (result.CommonMsg.Status == '200') {
            //上传成功
            if (typeof successCallback == 'function') {
              successCallback();
            }
          }
        }
      }
    );
  },
};

//判断登录
function isLogin() {
  if (getCookie('loginUid') === null || getCookie('loginUid') === '') {
    return false;
  }
  return true;
}

var isLive = window.location.host.indexOf('test') === -1;

console.log(isLive);

var apiHost = isLive ? 'cuep-sg.hihonor.com' : 'cuep-sg.test.hihonor.com';

//测试地址
var sLoginUrl = 'https://logintestlf.hwcloudtest.cn/oauth2/v2/authorize';
var sRedirectUrl = 'https://cuep-sg.test.hihonor.com/abroad/login/auth';
var sClientId = '101070239';
if (isLive) {
  //生产地址
  sLoginUrl = 'https://oauth-login5.cloud.huawei.com/oauth2/v2/authorize';
  sRedirectUrl = 'https://cuep-sg.hihonor.com/abroad/login/auth';
  sClientId = '100381747';
}

function loginBtn() {
  var sCurrentUrl =
    window.location.origin + window.location.pathname + '?isLogin';
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

export { isLogin, loginBtn, getCookie, apiHost, HONOROBSSDK };
