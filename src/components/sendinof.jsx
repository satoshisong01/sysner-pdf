import React from 'react';
import moment from 'moment';
import 'moment/locale/ko';
import {
  PDFDownloadLink,
  Page,
  Text,
  View,
  Document,
  Font,
  StyleSheet,
  Image,
} from '@react-pdf/renderer';
import font from '../font/NanumGothic-Bold.ttf';
import { useState } from 'react';
import images from '../img/hd_logo_ov.png';
import { reduceHooks } from 'react-table';

Font.register({
  family: 'Sunflower',
  fonts: [{ src: font }],
});

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  body: {
    padding: 10,
  },
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: '1px solid gray',
    borderColor: 'black',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  pagesize: {
    width: '95%',
    border: '3px solid black',
    marginBottom: 'auto',
  },
  estimate: {
    flexDirection: 'row',
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCol: {
    flexDirection: 'column',
    borderStyle: 'solid',
    borderColor: 'black',
    borderBottomColor: 'black',
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCellHeader: {
    margin: 5,
    fontSize: 12,
    fontWeight: 500,
  },
  tableCell: {
    margin: 5,
    fontSize: 10,
  },
  main_title: {
    marginBottom: 15,
    fontSize: 25,
    marginTop: 15,
    marginLeft: 5,
    textAlign: 'center',
    paddingBottom: 20,
    borderBottom: '1px solid gray',
  },

  cut1: {
    width: '35%',
    border: '1px solid black',
    borderBottomColor: 'black',
    flexDirection: 'colum',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cut2: {
    width: '5%',
    border: '1px solid black',
    borderBottomColor: '#342a2a',
    borderLeft: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  cut3: {
    width: '12%',
    border: '1px solid black',
    borderBottomColor: 'black',
    borderLeft: 'none',
    borderRight: 'none',
    borderBottom: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  cut3_line: {
    width: '100%',
    borderBottom: '1px solid black',
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cut3_line_upte: {
    width: '100%',
    borderBottom: '1px solid black',
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 1.5,
  },
  cut3_line_phone_num: {
    width: '100%',
    borderBottom: '0.7px solid black',
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cut4: {
    width: '48%',
    border: '1px solid black',
    borderBottomColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cut4_0: {
    flexDirection: 'row',
  },
  cut4_1: {
    width: '33.3%',
    borderTop: '1px solid black',
    borderBottomColor: 'black',
    flexDirection: 'colum',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 1,
  },
  cut4_1_ownername: {
    width: '33.3%',
    borderTop: '1px solid black',
    borderBottomColor: 'black',
    flexDirection: 'colum',
    justifyContent: 'center',
    alignItems: 'center',

    borderBottom: '1px solid black',
  },
  cut4_1_sysner: {
    width: '33.3%',
    borderTop: '1px solid black',
    borderBottomColor: 'black',
    flexDirection: 'colum',
    justifyContent: 'center',
    alignItems: 'center',

    borderBottom: '1px solid black',
  },
  cut4_gy: {
    backgroundColor: 'lightgray',
    width: '33.3%',
    border: '1px solid black',
    borderBottomColor: 'black',
    flexDirection: 'colum',
    justifyContent: 'center',
    alignItems: 'center',
    top: 1,
  },
  cut4_gy_owner: {
    backgroundColor: 'lightgray',
    width: '33.3%',
    border: '1px solid black',
    borderBottomColor: 'black',
    flexDirection: 'colum',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cut4_gy_list: {
    backgroundColor: 'lightgray',
    width: '33.3%',
    border: '1px solid black',
    borderBottom: 'none',
    borderBottomColor: 'black',
    flexDirection: 'colum',
    justifyContent: 'center',
    alignItems: 'center',
    top: 1,
  },
  text_day: {
    fontSize: 10,
    padding: 15,
  },
  text_sub: {
    paddingTop: 15,
    paddingBottom: 15,
    fontSize: 10,
  },
  text_num: {
    fontSize: 10,
    padding: 10,
  },
  text_num_whiteBG: {
    fontSize: 10,
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 9,
    marginBottom: 1,
  },
  text_num_whiteBG_addrres: {
    fontSize: 10,
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 9,
  },

  price_Sum: {
    width: '34.8%',
    border: '1px solid black',
    borderBottomColor: 'black',
    borderTop: 'none',
    borderRight: 'none',
    flexDirection: 'colum',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  price_Sum_white: {
    width: '34.8%',
    border: '1px solid black',
    borderBottomColor: 'black',
    borderTop: 'none',
    borderRight: 'none',
    flexDirection: 'colum',
    justifyContent: 'center',
    alignItems: 'center',
  },
  info_gray: {
    width: '100%',
    border: '1px solid black',
    borderBottomColor: 'black',
    borderTop: 'none',
    borderRight: 'none',
    flexDirection: 'colum',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
  },
  info_white: {
    width: '100%',
    border: '1px solid black',
    borderBottomColor: 'black',
    borderTop: 'none',
    borderRight: 'none',
    flexDirection: 'colum',
    justifyContent: 'center',
    alignItems: 'center',
  },
  price_Sum_white_gray: {
    width: '49.8%',
    border: '1px solid black',
    borderBottomColor: 'black',
    borderTop: 'none',
    borderRight: 'none',
    flexDirection: 'colum',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  price_sum_Total: {
    width: '65.2%',
    border: '1px solid black',
    borderBottomColor: 'black',
    borderTop: 'none',
    flexDirection: 'colum',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  price_item1: {
    width: '15%',
    border: '1px solid black',
    borderBottomColor: 'black',
    borderTop: 'none',
    borderRight: 'none',
    flexDirection: 'colum',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  price_item2: {
    width: '20.2%',
    border: '1px solid black',
    borderBottomColor: 'black',
    borderTop: 'none',
    borderRight: 'none',
    flexDirection: 'colum',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  price_item3: {
    width: '18%',
    border: '1px solid black',
    borderBottomColor: 'black',
    borderTop: 'none',
    borderRight: 'none',
    flexDirection: 'colum',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  price_item4: {
    width: '12%',
    border: '1px solid black',
    borderBottomColor: 'black',
    borderTop: 'none',
    flexDirection: 'colum',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  price_item1_white: {
    width: '15%',
    border: '1px solid black',
    borderBottomColor: 'black',
    borderTop: 'none',
    borderRight: 'none',
    flexDirection: 'colum',
    justifyContent: 'center',
    alignItems: 'center',
  },
  price_item2_white: {
    width: '20.2%',
    border: '1px solid black',
    borderBottomColor: 'black',
    borderTop: 'none',
    borderRight: 'none',
    flexDirection: 'colum',
    justifyContent: 'center',
    alignItems: 'center',
  },
  price_item3_white: {
    width: '18%',
    border: '1px solid black',
    borderBottomColor: 'black',
    borderTop: 'none',
    borderRight: 'none',
    flexDirection: 'colum',
    justifyContent: 'center',
    alignItems: 'center',
  },
  price_item4_white: {
    width: '12%',
    border: '1px solid black',
    borderBottomColor: 'black',
    borderTop: 'none',
    flexDirection: 'colum',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_total_price: {
    fontSize: 10,
    padding: 3,
  },
  text_sum_price: {
    fontSize: 10,
    padding: 3,
  },
  price_kor_Total: {
    fontSize: 10,
  },
  text_item_name: {
    fontSize: 10,
    padding: 7,
  },
  text_item_item_name: {
    fontSize: 10,
    padding: 4,
  },
  text_item_item_name_total: {
    fontSize: 10,
    padding: 5,
  },
  text_item_item_name_total_write: {
    fontSize: 10,
    padding: 30,
    color: 'red',
  },
});

const Sendinof = (props) => {
  let [changenames, setChangeNames] = useState('');
  let [changecompanys, setChangeCompanys] = useState('');
  let [changeemails, setChangeEmails] = useState('');

  let pdfList_Ui = props.arrui;
  let pdfList_Service = props.arrservice;
  let pdfList = props.arrtotal;
  let korPrice = '';
  let totalprice = props.pricedtotal + props.pricedui + props.priceservice;

  const MyDoc = () => (
    <Document style={{ fontFamily: 'Sunflower' }}>
      <Page style={styles.page}>
        <Text style={styles.main_title}>
          ???&nbsp;&nbsp;&nbsp;&nbsp;???&nbsp;&nbsp;&nbsp;&nbsp;???
        </Text>
        <View style={styles.pagesize}>
          <View style={styles.tableRow}>
            <View style={styles.cut1}>
              <Text style={styles.text_day}>
                {nowTime_H}&nbsp;???&nbsp;&nbsp;&nbsp;{nowTime_M}
                &nbsp;???&nbsp;&nbsp;&nbsp;{nowTime_D}&nbsp;???
              </Text>
              <Text style={styles.text_day}>
                <span style={{ color: 'red' }}>{changecompanys}</span> ??????
              </Text>
              <Text style={styles.text_day}>????????? ?????? ???????????????.</Text>
            </View>
            <View style={styles.cut2}>
              <Text style={styles.text_sub}>???</Text>
              <Text style={styles.text_sub}>???</Text>
              <Text style={styles.text_sub}>???</Text>
            </View>
            <View style={styles.cut3}>
              <View style={styles.cut3_line}>
                <Text style={styles.text_num}>????????????</Text>
              </View>
              <View style={styles.cut3_line}>
                <Text style={styles.text_num}>?????????</Text>
              </View>
              <View style={styles.cut3_line}>
                <Text style={styles.text_num}>??????</Text>
              </View>
              <View style={styles.cut3_line_upte}>
                <Text style={styles.text_num}>??????</Text>
              </View>
              <View style={styles.cut3_line_phone_num}>
                <Text style={styles.text_num}>????????????</Text>
              </View>
            </View>
            <View style={styles.cut4}>
              <Text style={styles.text_num_whiteBG}>582-86-01465</Text>
              <View style={styles.cut4_0}>
                <View style={styles.cut4_1_sysner}>
                  <Text style={styles.text_num_whiteBG}>(???)?????????</Text>
                </View>
                <View style={styles.cut4_gy_owner}>
                  <Text style={styles.text_num}>?????????</Text>
                </View>
                <View style={styles.cut4_1_ownername}>
                  <Text style={styles.text_num_whiteBG}>?????????</Text>
                </View>
              </View>

              <Text style={styles.text_num_whiteBG_addrres}>
                ????????? ????????? ????????? ????????? 123(?????????) 605???
              </Text>

              <View style={styles.cut4_0}>
                <View style={styles.cut4_1}>
                  <Text style={styles.text_num_whiteBG}>?????????</Text>
                </View>
                <View style={styles.cut4_gy_list}>
                  <Text style={styles.text_num}>??????</Text>
                </View>
                <View style={styles.cut4_1}>
                  <Text style={styles.text_num_whiteBG}>?????????</Text>
                </View>
              </View>
              <View style={styles.cut4_0}>
                <View style={styles.cut4_1}>
                  <Text style={styles.text_num_whiteBG}>010-5178-2219</Text>
                </View>
                <View style={styles.cut4_gy}>
                  <Text style={styles.text_num}>??????</Text>
                </View>
                <View style={styles.cut4_1}>
                  <Text style={styles.text_num_whiteBG}>031-383-3322</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.estimate}>
            <View style={styles.price_Sum}>
              <Text style={styles.text_sum_price}>
                ???&nbsp;???&nbsp;???&nbsp;???
              </Text>
              <Text style={styles.text_total_price}>
                (????????????&nbsp;&nbsp;+&nbsp;&nbsp;??????)
              </Text>
            </View>
            <View style={styles.price_sum_Total}>
              <Text style={styles.price_kor_Total}>
                <span style={{ color: 'red' }}>{korPrice}</span>
                &nbsp;???&nbsp;???&nbsp; (???{' '}
                <span style={{ color: 'red' }}>
                  {(totalprice / 10 + totalprice)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </span>
                &nbsp;)
              </Text>
            </View>
          </View>
          <View style={styles.estimate}>
            <View style={styles.price_Sum}>
              <Text style={styles.text_item_name}>
                ???&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;???
              </Text>
            </View>
            <View style={styles.price_item1}>
              <Text style={styles.price_kor_Total}>???&nbsp;&nbsp;&nbsp;???</Text>
            </View>
            <View style={styles.price_item2}>
              <Text style={styles.price_kor_Total}>
                ???&nbsp;???&nbsp;???&nbsp;???
              </Text>
            </View>
            <View style={styles.price_item3}>
              <Text style={styles.price_kor_Total}>???&nbsp;&nbsp;&nbsp;???</Text>
            </View>
            <View style={styles.price_item4}>
              <Text style={styles.price_kor_Total}>???&nbsp;&nbsp;&nbsp;???</Text>
            </View>
          </View>
          {Sendinfo_mail(pdfList)}
          {Sendinfo_mail_ui(pdfList_Ui)}
          {Sendinfo_mail_service(pdfList_Service)}
          <View style={styles.estimate}>
            <View style={styles.price_Sum_white}>
              <Text style={styles.text_item_item_name}>&nbsp;</Text>
            </View>
            <View style={styles.price_item1_white}>
              <Text style={styles.text_item_item_name}></Text>
            </View>
            <View style={styles.price_item2_white}>
              <Text style={styles.text_item_item_name}></Text>
            </View>
            <View style={styles.price_item3_white}>
              <Text style={styles.text_item_item_name}></Text>
            </View>
            <View style={styles.price_item4_white}>
              <Text style={styles.text_item_item_name}></Text>
            </View>
          </View>
          <View style={styles.estimate}>
            <View style={styles.price_Sum_white}>
              <Text style={styles.text_item_item_name}>&nbsp;</Text>
            </View>
            <View style={styles.price_item1_white}>
              <Text style={styles.text_item_item_name}></Text>
            </View>
            <View style={styles.price_item2_white}>
              <Text style={styles.text_item_item_name}></Text>
            </View>
            <View style={styles.price_item3_white}>
              <Text style={styles.text_item_item_name}></Text>
            </View>
            <View style={styles.price_item4_white}>
              <Text style={styles.text_item_item_name}></Text>
            </View>
          </View>
          <View style={styles.estimate}>
            <View style={styles.price_Sum_white_gray}>
              <Text style={styles.text_item_item_name_total}>???</Text>
            </View>
            <View style={styles.price_item2_white}>
              <Text
                style={
                  (styles.text_item_item_name, { color: 'red', fontSize: 10 })
                }
              >
                {totalprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </Text>
            </View>
            <View style={styles.price_item3_white}>
              <Text
                style={
                  (styles.text_item_item_name, { color: 'red', fontSize: 10 })
                }
              >
                {(totalprice / 10)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </Text>
            </View>
            <View style={styles.price_item4_white}>
              <Text style={styles.text_item_item_name}></Text>
            </View>
          </View>
          <View style={styles.estimate}>
            <View style={styles.info_gray}>
              <Text style={styles.text_item_item_name_total}>
                ???&nbsp;&nbsp;???&nbsp;&nbsp;???&nbsp;&nbsp;???
              </Text>
            </View>
          </View>
          <View style={styles.estimate}>
            <View style={styles.info_white}>
              <Text style={styles.text_item_item_name_total_write}>
                ??? ??? ???????????? ?????????????????? 30?????? ???????????????.
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );

  const Sendinfo_mail = (array) => {
    return array.map((item, index) => (
      <View style={styles.estimate} key={index}>
        <View style={styles.price_Sum_white}>
          <span style={{ color: 'red' }}>
            <Text style={styles.text_item_item_name}>{item.name}</Text>
          </span>
        </View>
        <View style={styles.price_item1_white}>
          <Text style={styles.text_item_item_name}>
            <span style={{ color: 'red' }}>
              {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </span>
          </Text>
        </View>
        <View style={styles.price_item2_white}>
          <Text style={styles.text_item_item_name}>
            <span style={{ color: 'red' }}>
              {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </span>
          </Text>
        </View>
        <View style={styles.price_item3_white}>
          <Text style={styles.text_item_item_name}>
            <span style={{ color: 'red' }}>
              {(item.price / 10)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </span>
          </Text>
        </View>
        <View style={styles.price_item4_white}>
          <Text style={styles.text_item_item_name}></Text>
        </View>
      </View>
    ));
  };

  const Sendinfo_mail_ui = (array) => {
    if (array.price > 0) {
      return [array].map((item, index) => (
        <View style={styles.estimate} key={index}>
          <View style={styles.price_Sum_white}>
            <span style={{ color: 'red' }}>
              <Text style={styles.text_item_item_name}>{item.name}</Text>
            </span>
          </View>
          <View style={styles.price_item1_white}>
            <Text style={styles.text_item_item_name}>
              <span style={{ color: 'red' }}>
                {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </span>
            </Text>
          </View>
          <View style={styles.price_item2_white}>
            <Text style={styles.text_item_item_name}>
              <span style={{ color: 'red' }}>
                {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </span>
            </Text>
          </View>
          <View style={styles.price_item3_white}>
            <Text style={styles.text_item_item_name}>
              <span style={{ color: 'red' }}>
                {(item.price / 10)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </span>
            </Text>
          </View>
          <View style={styles.price_item4_white}>
            <Text style={styles.text_item_item_name}></Text>
          </View>
        </View>
      ));
    }
  };

  const Sendinfo_mail_service = (array) => {
    if (array.price > 0) {
      return [array].map((item, index) => (
        <View style={styles.estimate} key={index}>
          <View style={styles.price_Sum_white}>
            <span style={{ color: 'red' }}>
              <Text style={styles.text_item_item_name}>{item.name}</Text>
            </span>
          </View>
          <View style={styles.price_item1_white}>
            <Text style={styles.text_item_item_name}>
              <span style={{ color: 'red' }}>
                {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </span>
            </Text>
          </View>
          <View style={styles.price_item2_white}>
            <Text style={styles.text_item_item_name}>
              <span style={{ color: 'red' }}>
                {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </span>
            </Text>
          </View>
          <View style={styles.price_item3_white}>
            <Text style={styles.text_item_item_name}>
              <span style={{ color: 'red' }}>
                {(item.price / 10)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </span>
            </Text>
          </View>
          <View style={styles.price_item4_white}>
            <Text style={styles.text_item_item_name}></Text>
          </View>
        </View>
      ));
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // const info = this.inputRef.current.value;
  };

  const changeCompany = (event) => {
    setChangeCompanys(event.target.value);
  };

  const changeEmail = (event) => {
    setChangeEmails(event.target.value);
  };

  const changeName = (event) => {
    setChangeNames(event.target.value);
  };

  const nowTime_H = moment().format('YYYY');
  const nowTime_M = moment().format('MM');
  const nowTime_D = moment().format('DD');

  function priceConvertKorean(num) {
    console.log(num);
    num = num / 10 + num;
    let changenum = num.toString();
    var x = new Array(
      '',
      '???',
      '???',
      '???',
      '???',
      '???',
      '???',
      '???',
      '???',
      '???',
      '???',
    );
    var y = new Array(
      '',
      '???',
      '???',
      '???',
      '',
      '???',
      '???',
      '???',
      '',
      '???',
      '???',
      '???',
      '',
      '???',
      '???',
      '???',
    );
    var han = '';
    var str = '';
    var result = '';

    for (let i = 0; i < changenum.length; i++) {
      str = '';
      han = x[changenum.charAt(changenum.length - (i + 1))];
      if (han != '') str += han + y[i];
      if (i == 4) str += '???';
      if (i == 8) str += '???';
      if (i == 12) str += '???';
      if (i == 16) str += '???';

      result = str + result;
    }

    if (changenum != 0) result = result;
    return result;
  }

  console.log(totalprice);
  korPrice = priceConvertKorean(totalprice);
  return (
    <>
      <div className="forminfo">
        <form className="send-form" onSubmit={onSubmit}>
          <h2 className="estimate">?????? ??????</h2>
          <h2 className="price-text">
            {(props.pricedtotal + props.pricedui + props.priceservice)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            ???
          </h2>
          <input
            type="text"
            className="add-text"
            onChange={changeCompany}
            placeholder="????????? ?????? ??????"
          />
          <input
            type="email"
            className="add-email"
            onChange={changeEmail}
            placeholder="????????????????????????????????????"
          />
          {/* <input
            type="text"
            className="add-name"
            onChange={changeName}
            placeholder="??????(???????????? ?????????)"
          /> */}
          {pdfList_Ui.price > 0 ? (
            <button className="send-button">
              <div className="App">
                <PDFDownloadLink document={<MyDoc />} fileName={`?????????.pdf`}>
                  {({ blob, url, loading, error }) =>
                    loading ? '????????? ?????????' : '????????? ?????? ?????????'
                  }
                </PDFDownloadLink>
              </div>
            </button>
          ) : (
            <h3 style={{ fontWeight: '900', fontSize: '25px', color: 'red' }}>
              UI ????????? ????????? ????????? ???????????????
            </h3>
          )}
        </form>
      </div>
    </>
  );
};

export default Sendinof;
