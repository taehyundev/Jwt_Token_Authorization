# JWT( JSON Web Token)

> JSON Web Token 은 웹 표준으로서 두 개체 JSON 객체를 사용하여 가볍고, 자가수용적인 방식으로 정보를 안전성 있게 전달해줍니다.



 

#### 자가 수용적 (self-contained) 입니다

JWT 는 필요한 모든 정보를 자체적으로 지니고 있습니다. JWT 시스템에서 발급된 토큰은, 토큰에 대한 기본정보, 전달 할 정보 (로그인시스템에서는 유저 정보를 나타내겠죠?) 그리고 토큰이 검증됐다는것을 증명해주는 signature 를 포함하고있습니다.

#### 쉽게 전달 될 수 있습니다

JWT 는 자가수용적이므로, 두 개체 사이에서 손쉽게 전달 될 수 있습니다. 웹서버의 경우 HTTP의 헤더에 넣어서 전달 할 수도 있고, URL 의 파라미터로 전달 할 수도 있습니다.







JWT 는 `.` 을 구분자로 3가지의 문자열로 되어있습니다. 구조는 다음과 같이 이루어져있습니다:



헤더.내용.서명가  JWT의 생김새이다.



#### JWT를 사용하기 전에

```
npm install jsonwetoken
```

#### Token 생성

```javascript
    var jwt = require('jsonwebtoken')
    var token = jwt.sign({token:"taehyundev"}, 'secret_key');
    // 위와 같은 형태로 토큰을 생성한다.
    // encode가 된다. (보안성 높음)
```

#### Token의 복호화

```javascript
    var jwt = require('jsonwebtoken')
    var decoded = jwt.verify(token, 'secret_key')
    //이러한 형태로 토큰을 원문 즉 Plain text 의 형태로 받을 수 있게 된다.
```

#### Token 생성 (유효기간 설정)
```javascript
    var jwt = require('jsonwebtoken') 
    var token = jwt.sign({plain:'taehyundev'}, exp:Math.floor(Date.now() /1000 + 60)}, 'secret_key')
    //이러한 형태로 60초 즉 1분 동안의 토큰의 유효기간을 부여합니다.
```
#### 준비중 :: 
> 로그인 로그아웃 폼을 세션이 아닌 Token 형태로 돌아가게끔 하는 것이 가장 가까운 목표

#### 로그인 메커니즘
ID, Password를 받으면, response로 token을 넘겨주고 그걸 localStorage에 저장합니다.

그 후에 만약에 서버에 요청을 할 일이 생긴다면 header에 token을 넣어서 보내주면,서버는 token을 분석해서 현재 유저를 확인을한다.

알맞은 요청이라면 제대로 된 값을 보여준다.