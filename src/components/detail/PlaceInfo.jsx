import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Tabs } from 'antd';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { KakaoMapScript } from '../../lib/kakaoMap';
import Spacer from './../common/Spacer';

const { TabPane } = Tabs;

const SpacerCustom = styled(Spacer)`
  margin-top: 5rem;
  margin-left: -1rem;
  div {
    border-bottom: 5px solid whitesmoke;
  }
`;

const tabStyle = {
  paddingLeft: '1rem',
  paddingRight: '1rem',
  marginTop: '5vh',
  borderRadius: '0.5rem',
  border: '1px solid whitesmoke',
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

          cursor:pointer;
          border:1px solid gray;
          border-radius:0.25rem;
      }
    }
  }
`;

const PlaceInfo = ({ place }) => {
  const [preViewChecked, setPreViewChecked] = useState({});

  const onPreviewClick = useCallback(
    (cat) => {
      setPreViewChecked({
        ...preViewChecked,
        [cat]: !preViewChecked[cat],
      });
    },
    [preViewChecked],
  );

  const preview = useCallback(
    (text, cat) => {
      const result = [];
      let preText = text;
      if (text.length > 70 || text.split('\n').length > 2) {
        if (!preViewChecked[cat]) {
          preText = text.replaceAll('\n', ' ').substr(0, 55).concat('... ');
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
    },
    [onPreviewClick, preViewChecked],
  );

  const hasContent = useCallback((place) => {
    const content = ['contact', 'cost', 'info', 'link_url'];
    let check = false;
    content.forEach((item) => {
      if (!check && place[item] !== null) {
        check = true;
      }
    });
    return check;
  }, []);

  useEffect(() => {
    KakaoMapScript(place.address);
  }, [place.address]);

  return (
    <>
      <Tabs defaultActiveKey="1" style={tabStyle}>
        <TabItem tab="?????? ??????" key="1">
          <div className="infoBlock" key={'address'}>
            <span className="category " key={'address_cat'}>
              ??????
            </span>
            <span className="info" key={'address_info'}>
              {place.address}
            </span>
          </div>
          {place.wayinfo ? (
            <div className="infoBlock" key={'wayinfo'}>
              <span className="category" key={'wayinfo_cat'}>
                ?????????
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
              ??????
            </span>
            <span className="info" key={'map_info'}>
              <div id="kakaoMap" />
            </span>
          </div>
        </TabItem>

        {hasContent(place) ? (
          <TabItem tab="?????? ??????" key="2">
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
                  ??????
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
                  ??????
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
      <SpacerCustom>
        <div></div>
      </SpacerCustom>
    </>
  );
};

export default React.memo(PlaceInfo);
