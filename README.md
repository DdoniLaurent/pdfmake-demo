1. github에서 pdfmake-master.zip을 다운로드 받는다.

2. pdfmake-master.zip파일 압축을 푼다.

zip파일 다운로드 한 곳으로 이동하자.

3. cmd창을 연다.
C:\Users\desktop>d:

D:\>cd pdfmake-master

-- grunt cli 설치

D:\>npm install -g grunt-cli

D:\pdf-make-master>npm install grunt --save-dev

+ grunt@1.0.2

added 120 pakages in 5.356s

D:\pdfmake-master>npm init

This utility will walk you through creating a package. json file.

It only covers the most common items, and tries to guess sensible defaults.


4. 해당 폴더로 가서 package.json파일이 생성되었는지 확인

5. 파일을 열어서 grunt: "버전"이 있는지 확인

6. Gruntfile.js 수동 생성

- npm install한 폴더안에 생성 

- 설치할 grunt(ex grunt-dump-dir) 생성

7. cmd창으로 와서 gruntfil.js안에 설치할 목록 설치

D:\pdf-make-master>npm install grunt-contrib-concat --save-dev

D:\pdf-make-master>npm install grunt-contrib-uglify --save-dev

D:\pdf-make-master>npm install grunt-dump-dir --save-dev 

8. grunt 실행

D:\pdf-make-master>grunt dump_dir

9.  file 생성됨 확인

=> "dist/plugins/js/vfs_fonts.js" created.

/ ** javascript에 적용 */

① 압축푼 zip 파일에 build폴더안에 pdfmake.min.js나 pdfmake.js 둘중 하나 선택해서 이클립스/STS에 import  

pdfmake.js/pdfmake.min.js 설정
Hangul 폰트 추가 - pdfmake.js파일에 Roboto: {normal: 'Roboto-Regular.ttf',bold: 'Roboto-Medium.ttf',italics: 'Roboto-Italic.ttf',bolditalics: 'Roboto-MediumItalic.ttf’} 적용되어져있는 곳 뒤에 hangul:{normal: 'LG PC.ttf',bold:'LG PC.ttf',italics:'LG PC.ttf',bolditalics:'LG PC.ttf’} 추가 (변환한 글꼴 추가)
Default 바꿔주기 - Roboto라고 되어있는 것 모두 hangul로 바꿔줌.

② 생성한 vfs_fonts.js 이클립스/STS에 import 

③ index.jsp에 설정 (단, 순서중요 pdfmake.js/pdfmake.min.js가 위로 오게 설정

ex) <script src="${pageContext.request.contextPath}/resources/js/pdfmake.js"></script>
<script src="${pageContext.request.contextPath}/resources/js/vfs_fonts.js"></script>