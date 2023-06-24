# facebook-clone

### 작업 환경 구성
---
- 가상환경
    - 1. 가상환경 구성
        ```
        python3 -m venv venv
        ``` 

    - 2. 가상환경 활성화
        ```
        source venv/bin/activate
        ```

- 필수 라이브러리 설치
    ```
    pip3 install -r requirments.txt
    ```

- 마이그레이션
    ```
    python3 config/manage.py migrate
    ```

- 서버 실행
    ```
    python3 config/manage.py runserver
    ```


### API 명세서
|요청|url|설명|
|:---:|:---:|:---:|
|POST|http://127.0.0.1:8000/api/login/|로그인|
|POST|http://127.0.0.1:8000/api/logout/|로그아웃|
|POST|http://127.0.0.1:8000/api/register/|회원가입|
|GET|http://127.0.0.1:8000/api/profiles/mypage/|마이 페이지|
|PUT|http://127.0.0.1:8000/api/profiles/mypage/|마이페이지 내용 수정|