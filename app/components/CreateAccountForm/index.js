/**
 *
 * CreateAccountForm
 *
 */

import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
// import { Web3Provider } from 'react-web3';

// import styled from 'styled-components';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// import Switch from '@material-ui/core/Switch';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Tooltip from '@material-ui/core/Tooltip';

// @material-ui/icons
import PersonAdd from '@material-ui/icons/PersonAdd';
import AccountBalance from '@material-ui/icons/AccountBalance';

// core components
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import CustomInput from 'components/CustomInput/CustomInput';
import Button from 'components/CustomButtons/Button';
import Card from 'components/Card/Card';
import CardHeader from 'components/Card/CardHeader';
import CardIcon from 'components/Card/CardIcon';
import CardBody from 'components/Card/CardBody';
import RoundButton from 'components/RoundButton/RoundButton';
import ButtonProcess from 'components/RoundButton/Button';
import ArrowImg from 'components/RoundButton/ArrowImg';

import regularFormsStyle from 'assets/jss/regularFormsStyle';

// const web3 = null;

const FormObject = props => {
  // const { values, touched, errors, handleChange, handleBlur, handleSubmit, eosAccount, classes } = props;
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    onBlurText,
    formVisible,
    handlePay,
    currency,
  } = props;
  // console.log('currency = ', currency, formVisible);
  return (
    <form>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <CustomInput
            labelText="New Account Name"
            id="name"
            error={errors.name}
            touched={touched.name}
            formControlProps={{
              fullWidth: true,
            }}
            onBlurText={onBlurText}
            inputProps={{
              type: 'text',
              placeholder: '12 characters, a-z, 1-5',
              value: values.name,
              onChange: handleChange,
              onBlur: handleBlur,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <CustomInput
            labelText="Owner Public Key"
            id="ownerKey"
            error={errors.ownerKey}
            touched={touched.ownerKey}
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
              placeholder: 'Enter public key1',
              value: values.ownerKey,
              onChange: handleChange,
              onBlur: handleBlur,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <CustomInput
            labelText="Active Public Key"
            id="activeKey"
            error={errors.activeKey}
            touched={touched.activeKey}
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
              placeholder: 'Enter public key',
              value: values.activeKey,
              onChange: handleChange,
              onBlur: handleBlur,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Button onClick={handleSubmit} color="rose">
            Create
          </Button>
        </GridItem>
      </GridContainer>
      <GridContainer gridBorder="1px solid red" display1={formVisible ? 'none' : ''}>
        <GridItem xs={12} sm={12} md={3} right="1px solid green">
          <RoundButton value={`${currency.UNIT_AMOUNT}$`} currency="USD" />
        </GridItem>
        <GridItem md={1}>
          <ArrowImg imgValue="https://t5.rbxcdn.com/3856a8135179ca5ccd25c88b3243207e" />
        </GridItem>
        <GridItem xs={12} sm={12} md={8} right="1px solid blue">
          <GridContainer roundsGap="roundsGap">
            <GridItem md={8}>
              <RoundButton value={currency.ETH} currency="ETH" />
            </GridItem>
            <GridItem md={4}>
              <ButtonProcess value="ETH" onclick={handlePay} />
            </GridItem>
          </GridContainer>
          <GridContainer roundsGap="roundsGap">
            <GridItem md={8}>
              <RoundButton value={currency.BTC} currency="BTC" />
            </GridItem>
            <GridItem md={4}>
              <ButtonProcess value="BTC" />
            </GridItem>
          </GridContainer>
          {/* <GridContainer>
            <GridItem md={8}>
              <RoundButton value="$15" currency="USD" />
            </GridItem>
            <GridItem md={4}>
              <ButtonProcess value="ETH" />
            </GridItem>
          </GridContainer> */}
        </GridItem>
      </GridContainer>
    </form>
  );
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Account name is required')
    .matches(/([a-z1-5]){12,}/, {
      excludeEmptyString: true,
      message: 'Invalid account name',
    }),
  ownerKey: Yup.string().required('Owner key is required'),
  activeKey: Yup.string().required('Active key is required'),
  net: Yup.number()
    .required('NET Stake is required')
    .positive('You must stake a positive quantity'),
  cpu: Yup.number()
    .required('CPU Stake is required')
    .positive('You must stake a positive quantity'),
  ram: Yup.number()
    .required('RAM purchase is required')
    .positive('RAM must be a positive quantity')
    .integer('RAM cannot be fractional'),
});
// onload = () => {
//   console.log('hello onload');
//   console.log('window.web3', window.web3.currentProvider);
//   web3 = window.web3;
// };
// onload();
const CreateAccountForm = props => {
  const { classes, handleSubmit, onBlurText, history, formVisible, handlePay, currency } = props;
  // console.log('props1 = ', props);
  return (
    // <Web3Provider>
    <GridContainer>
      <GridItem xs={12} sm={12} lg={8}>
        <Card>
          <CardHeader color="warning" icon>
            <CardIcon color="warning">
              <PersonAdd />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Create Account</h4>
          </CardHeader>
          <CardBody>
            <Formik
              initialValues={{
                name: '',
                ownerKey: '',
                activeKey: '',
                net: '0.1',
                cpu: '0.1',
                ram: '8192',
                history,
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              // history={history}
              // eosAccount={eosAccount}
              // render={formikProps => <FormObject {...formikProps} eosAccount={eosAccount} classes={classes} />}
              render={formikProps => (
                <FormObject
                  {...formikProps}
                  classes={classes}
                  onBlurText={onBlurText}
                  formVisible={formVisible}
                  currency={currency}
                  handlePay={handlePay}
                />
              )}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} lg={4}>
        <Card>
          <CardHeader color="rose" icon>
            <CardIcon color="rose">
              <AccountBalance />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Ricardian</h4>
          </CardHeader>
          <CardBody>
            <p>
              The <i>newaccount</i> action creates a new account.
              <br />
              <br />
              As an authorized party I <i>signer</i> wish to exercise the authority of <i>creator</i> to create a new
              account on this system named <i>name</i> such that the new account&apos;s owner public key shall be{' '}
              <i>owner key</i> and the active public key shall be <i>active key</i>.
            </p>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
    // </Web3Provider>
  );
};

export default withStyles(regularFormsStyle)(CreateAccountForm);
