import React, { useRef } from "react";
import { Route, Link } from "react-router-dom";
import style from "./vieworder.module.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function ViewOrder() {
  return (
    <div>
      <Route path="/issue/vieworder" component={Page3}></Route>
    </div>
  );
}

function Page3() {
  // 상단 리스트 버튼 DOM
  const recently_btn = useRef();
  const view_btn = useRef();
  // 하단 리스트 버튼 DOM
  const list1 = useRef();
  const list2 = useRef();

  // 상단 리스트를 버튼을 클릭할 때 스타일 적용
  const onClick_top = (e) => {
    recently_btn.current.className = "";
    view_btn.current.className = "";
    e.target.className = `${style.check}`;
  };
  // 하단 리스트 버튼을 클릭할 때 스타일 적용
  const onClick_bottom = (e) => {
    list1.current.className = "";
    list2.current.className = "";
    e.target.className = `${style.on}`;
  };
  return (
    <div>
      {/* 인기레시피 내용,사진 */}
      <div className={style.issue_content}>
        <div className={style.content_in}>
          <div className={style.content_switch}>
            <div>
              <p>검색결과 조회</p>
              <ul>
                <li>
                  <Link
                    to="/issue/recentlyorder"
                    ref={recently_btn}
                    onClick={onClick_top}
                  >
                    최신순
                  </Link>
                </li>
                <li>
                  <Link
                    to="/issue/vieworder"
                    className={style.check}
                    ref={view_btn}
                    onClick={onClick_top}
                  >
                    조회순
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
            <li>11</li>
            <li>12</li>
            <li>13</li>
            <li>14</li>
            <li>15</li>
            <li>16</li>
            <li>17</li>
            <li>18</li>
            <li>19</li>
            <li>20</li>
          </ul>
          {/* 하단 리스트 버튼 */}
          <div className={style.content_list}>
            <div>
              <Link
                to="/issue/vieworder1"
                className={style.on}
                onClick={onClick_bottom}
                ref={list1}
              >
                1
              </Link>

              <Link to="/issue/vieworder2" onClick={onClick_bottom} ref={list2}>
                2
              </Link>

              <Link to="/issue/vieworder2" className={style.arrow_btn}>
                <IoIosArrowForward />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Route path="/issue/vieworder2" component={Page4}></Route>
      </div>
    </div>
  );
}

function Page4() {
  // 상단 리스트 버튼 DOM
  const recently_btn = useRef();
  const view_btn = useRef();
  // 하단 리스트 버튼 DOM
  const list1 = useRef();
  const list2 = useRef();

  // 상단 리스트를 버튼을 클릭할 때 스타일 적용
  const onClick_top = (e) => {
    recently_btn.current.className = "";
    view_btn.current.className = "";
    e.target.className = `${style.check}`;
  };
  // 하단 리스트 버튼을 클릭할 때 스타일 적용
  const onClick_bottom = (e) => {
    list1.current.className = "";
    list2.current.className = "";
    e.target.className = `${style.on}`;
  };
  return (
    <div>
      {/* 인기레시피 내용,사진 */}
      <div className={style.issue_content}>
        <div className={style.content_in}>
          <div className={style.content_switch}>
            <div>
              <p>검색결과 조회</p>
              <ul>
                <li>
                  <Link
                    to="/issue/recentlyorder"
                    ref={recently_btn}
                    onClick={onClick_top}
                  >
                    최신순
                  </Link>
                </li>
                <li>
                  <Link
                    to="/issue/vieworder"
                    className={style.check}
                    ref={view_btn}
                    onClick={onClick_top}
                  >
                    조회순
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <ul>
            <li>21</li>
            <li>22</li>
            <li>23</li>
            <li>24</li>
            <li>25</li>
            <li>26</li>
            <li>27</li>
            <li>28</li>
            <li>29</li>
            <li>30</li>
            <li>31</li>
            <li>32</li>
            <li>33</li>
            <li>34</li>
            <li>35</li>
            <li>36</li>
            <li>37</li>
            <li>38</li>
            <li>39</li>
            <li>40</li>
          </ul>
          {/* 하단 리스트 버튼 */}
          <div className={style.content_list}>
            <div style={{ paddingRight: "2%" }}>
              <Link to="/issue/vieworder1" className={style.arrow_btn_back}>
                <IoIosArrowBack />
              </Link>
              <Link to="/issue/vieworder1" onClick={onClick_bottom} ref={list1}>
                1
              </Link>

              <Link
                to="/issue/vieworder2"
                className={style.on}
                onClick={onClick_bottom}
                ref={list2}
              >
                2
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ViewOrder, Page3, Page4 };
