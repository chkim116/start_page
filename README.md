# Starter Page

[열기](https://starte.netlify.app/)

## Reason

#### Why?

<p> 
만약 자주 사용하는 검색 엔진(ex. 네이버, 구글 등)을 시작 페이지에서 바로 이용해 검색 할 수 있다면 직접 네이버나 구글에 들어가지 않아도 됩니다.
</p>
<p>
또한 그런 기능과 더불어 자주 찾는 페이지를 북마크 할 수 있고, 투두리스트까지 체크할 수 있는 다양한 기능을 지원하는 페이지가 있다면 굉장히 효율적이겠다는 생각이 들었습니다.</p>
<p> 
하여 원하는 검색 엔진으로 접근하는 과정에서 네이버나 구글에 들어가야하는 중간 과정을 없애고<br /> 북마크 추가 및 투두리스트까지 작성해 체크할 수 있는 복합적인 페이지를 만들고자 했습니다.
</p>

#### Info

<p>스타터 페이지는 기본적으로 Naver, Daum, Google 검색이 가능하며. 왼쪽 todolist 버튼을 클릭해 투두리스트도 작성할 수 있습니다.</p>
<p>또한 자주 사용하는 페이지를 북마크로 추가할 수 있어 접근이 용이하며, 로컬스토리지로 관리하였기 때문에 모든 데이터는 항상 유지가 됩니다.</p>

<br />
<br />

## Stack

**스타터페이지는 다음과 같은 스택으로 구성되었습니다.**

<p>1. 리액트의 프레임워크를 경험해 보고자 선택한 <strong>Next.js</strong></p>

<p>2. 변함없는 데이터 유지를 위한 <strong>LocalStorage</strong> </p>

<p>3. 중앙 상태 관리 사용 경험을 얻기 위한 <strong>Redux</strong></p>

<p>4. css-in-js <strong>Style-Components</strong></p>

<p>5. 자동 배포를 위한 <strong>Netlify</strong></p>

<br />
<br />

## Structure

#### 주요 폴더 구조는 다음과 같습니다.

-   components
    -   **Container**폴더는 사용하는 컴포넌트에 따라 수행할 다양한 로직을 갖고 있습니다.
        -   _HomeContents 파일은 북마크 기능_
        -   _HomeSearch 파일은 검색 기능_
        -   _HomeSideContents 파일은 투두리스트 기능_
    -   **Presenter**폴더는 화면에 보여지는 컴포넌트입니다.
-   pages
    -   라우터를 담당하는 폴더로써, **날씨 데이터와 시간 진행** 로직은 이곳에 있습니다.
-   modules

    -   **리덕스 폴더**입니다. ducks패턴을 사용했습니다.

    <br />
    <br />

## Features

<ul>
<li><a href="#search">검색 엔진 선택 및 검색</a></li>
<li><a href="#bookmark">북마크 추가 및 새 창 or 현재 창</a></li>
<li><a href="#todo">투두리스트</a></li>
<li><a href="#data">날씨 데이터</a></li>
</ul>

<br />
<br />

#### <a style="color : black" id="search">검색 엔진 선택 및 검색</a>

<p>네이버, 다음, 구글로 검색 엔진을 변경할 수 있고 그에 따른 검색 결과로 현재 창에서 이동됩니다.</p>

<br />
<img src="./image/search.gif">
<br />

#### <a style="color : black" id="bookmark">북마크 추가 및 새 창 or 현재 창</a>

<p>필요하다면 북마크로 자주 찾는 페이지를 등록할 수 있습니다.</p>
<p>새 창으로 열기 버튼을 활성화 시키면 새 창으로 열 수 있습니다. (기본은 현재창입니다.)</p>
<br />
<img src="./image/bookmark.gif">
<br />

#### <a style="color : black" id="todo">투두리스트</a>

<p>화면 왼쪽 중앙에 있는 todolist를 클릭하면 페이지가 전환되어 투두리스트를 작성할 수 있습니다.</p>
<br />
<img src="./image/todo.gif">
<br />

#### <a style="color : black" id="data">날씨 데이터</a>

<p>API를 활용해 위치 기반으로 현재 지역과 날씨 데이터를 왼쪽 상단에 보여줍니다.</p>
<p>단, 이 기능은 접근 허용 시에만 나타납니다.</p>
<br />
