import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Tabs } from 'antd';
import { Tag } from 'antd';
import { HeartTwoTone } from '@ant-design/icons';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';

import { KakaoMapScript } from '../../lib/kakaoMap';
const { TabPane } = Tabs;

const TitleWrapper = styled.div`
  height: 400px;
  background: #eef2f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .contentBlock {
    display:flex;
    align-items:center;
    justify-content: space-between;
    img {
      object-fit: cover;
      width: 400px;
      height: 300px;
      margin-left: 10rem;
    }
    .textBlock{
      height:300px;
      h1{
      margin-left:10vw;
    }
    .heartInfo{
      margin-left:25vw;
      span{
        text-align:center;
        font-size:20px;
      }
    }
    .tagInfo{
      margin-left:10vw;
      margin-top:5vh;
      width:300px;
      flex-wrap:wrap;
    }
    }

  }
  }
`;

const CustomTag = styled(Tag)`
  margin-top: 1rem;
`;
const tabStyle = {
  paddingLeft: '1rem',
  paddingRight: '1rem',
  marginTop: '5vh',
  border: '1px solid #f0f0f0',
  borderRadius: '0.5rem',
};

const TabItem = styled(TabPane)`
  margin-top: -1rem;

  .infoBlock + .infoBlock {
    border-top: 1px solid #f0f0f0;
    margin-top: 1rem;#1a1010
  }

  .infoBlock {
    display: flex;
    padding-top: 1rem;
    margin-bottom: 1rem;
    text-align: center;

    .category {
      width: 200px;
    }
    pre{
        margin-bottom:0px;
      }

    .info {
      width: 100%;
      text-align: left;
      white-space:pre-line;
      .textToggl{
        margin-bottom: 0px;
          margin-left:3rem;
          cursor:pointer;
          border:1px solid gray;
          border-radius:0.25rem;
      }
    }
  }
`;

const PlaceInfo = ({ place }) => {
  const [preViewChecked, setPreViewChecked] = useState({});

  const tag = place.tag ? place.tag.split('\n') : '';
  const img_url = place.img_src
    ? place.img_src
    : require('../../assets/noImg.png');

  useEffect(() => {
    KakaoMapScript(place.address);
  }, [place]);

  const preview = (text, cat) => {
    const result = [];
    let preText = text;
    if (text.length > 70 || text.includes('\n')) {
      if (!preViewChecked[cat]) {
        preText = text.replaceAll('\n', ' ').substr(0, 55).concat('...');
      }
      result.push(preText);
      result.push(
        <span
          className="textToggl"
          onClick={() => onPreviewClick(cat)}
          key={cat + '_toggle'}
        >
          {!preViewChecked[cat] ? <CaretDownOutlined /> : <CaretUpOutlined />}
        </span>,
      );
    } else {
      result.push(preText);
    }
    return result;
  };

  const onPreviewClick = (cat) => {
    setPreViewChecked({
      ...preViewChecked,
      [cat]: !preViewChecked[cat],
    });
  };

  function hasContent(place) {
    const content = ['contact', 'cost', 'info', 'link_url'];
    let check = false;
    content.forEach((item) => {
      if (!check && place[item] !== null) check = true;
    });
    return check;
  }

  return (
    <>
      <TitleWrapper>
        <div className="contentBlock">
          <img alt="" src={img_url} />
          <div className="textBlock">
            <h1>{place.name}</h1>
            <div className="heartInfo">
              <HeartTwoTone
                twoToneColor="#eb2f96"
                style={{ fontSize: '20px' }}
              />
              <span>{place.likeCount}</span>
            </div>
            <div className="tagInfo">
              {tag
                ? tag.map((item, idx) => {
                    return (
                      <CustomTag color="green" key={idx}>
                        {item}
                      </CustomTag>
                    );
                  })
                : ''}
            </div>
          </div>
        </div>
      </TitleWrapper>

      <Tabs defaultActiveKey="1" style={tabStyle}>
        <TabItem tab="위치 정보" key="1">
          <div className="infoBlock" key={'address'}>
            <span className="category " key={'address_cat'}>
              주소
            </span>
            <span className="info" key={'address_info'}>
              {place.address}
            </span>
          </div>
          {place.wayinfo ? (
            <div className="infoBlock" key={'wayinfo'}>
              <span className="category" key={'wayinfo_cat'}>
                가는길
              </span>
              <pre className="info" key={'wayinfo_info'}>
                {preview(place.wayinfo, 'wayinfo')}
              </pre>
            </div>
          ) : (
            ''
          )}
          <div className="infoBlock" key={'map'}>
            <span className="category" key={'map_cat'}>
              지도
            </span>
            <span className="info" key={'map_info'}>
              <div id="kakaoMap" />
            </span>
          </div>
        </TabItem>

        {hasContent(place) ? (
          <TabItem tab="시설 정보" key="2">
            {place.contact ? (
              <div className="infoBlock" key={'contact'}>
                <span className="category" key={'contact_cat'}>
                  TEL
                </span>
                <span className="info" key={'contact_info'}>
                  {place.contact}
                </span>
              </div>
            ) : (
              ''
            )}

            {place.link_url ? (
              <div className="infoBlock" key={'link_url'}>
                <span className="category" key={'link_url_cat'}>
                  SITE
                </span>
                <a href={place.link_url} className="info" key={'link_url_info'}>
                  {place.link_url}
                </a>
              </div>
            ) : (
              ''
            )}

            {place.cost ? (
              <div className="infoBlock" key={'cost'}>
                <span className="category" key={'cost_cat'}>
                  비용
                </span>
                <pre className="info" key={'cost_ifno'}>
                  {preview(place.cost, 'cost')}
                </pre>
              </div>
            ) : (
              ''
            )}

            {place.info ? (
              <div className="infoBlock" key={'info'}>
                <span className="category" key={'info_cat'}>
                  안내
                </span>
                <pre className="info" key={'info_ifno'}>
                  {preview(place.info, 'info')}
                </pre>
              </div>
            ) : (
              ''
            )}
          </TabItem>
        ) : (
          ''
        )}
      </Tabs>
    </>
  );
};

export default PlaceInfo;
