import { Formik } from 'formik';
import * as qs from 'qs';
import { equals } from 'ramda';
import { useEffect, useState } from 'react';
import { Styles } from './style';
import { BUTTON_ACTIVE } from '../../const/const';
import { FORMVALUES } from '../../hook/types';
import Subtext from '../Text/subText';
import InputRadio from './inputRadio';
import { CONDITIONFORM, FORMPARTOF } from '../../const/constGlobal';
import InputCheck from './inputCheck';
import InputCheckcondition from './inputCheckcondition';
import { validationSchemaColaborator } from './validations';
import { createContactColaborator } from '../../domain/useContact';
import Conditions from './conditions';
import { useUseAllPartner } from '../../domain/usePartners';
import { getLocale } from '../../public/locales/getLocale';

export default function FormColaborator() {
  const translate = getLocale();
  const [query, setQuery] = useState('');
  const [area, setArea] = useState<any>([]);
  const [filter, setFilter] = useState('teamMember');

  const queryQs = qs.stringify(
    {
      filters: {
        partnerOrTeam: {
          $eq: 'partner',
          // 'filter',
        },
      },
    },
    {
      encodeValuesOnly: true,
    },
  );
  useEffect(() => {
    setQuery(queryQs);
  }, [filter]);
  const { data: Partner } = useUseAllPartner(query);
  const valueName = FORMVALUES.FIRSTNAME;
  const valueLastName = FORMVALUES.LASTNAME;
  const valuePhone = FORMVALUES.PHONE;
  const valueEmail = FORMVALUES.EMAIL;
  const valuepartOf = FORMVALUES.PARTOF;
  const valueMessage = FORMVALUES.MESSAGE;
  const check = FORMVALUES.CONDITIONS;

  const initialValues = {
    [FORMVALUES.FIRSTNAME]: '',
    [FORMVALUES.LASTNAME]: '',
    [FORMVALUES.PHONE]: '',
    [FORMVALUES.EMAIL]: '',
    [FORMVALUES.LINK]: '',
    [FORMVALUES.COMPANY]: '',
    [FORMVALUES.PARTOF]: '',
    [FORMVALUES.SPECIALITY]: [],
    [FORMVALUES.MESSAGE]: '',
    [FORMVALUES.CONDITIONS]: false,
  };

  const addArea = (newArea: any) => {
    const areaFind = area.find((areas: any) => equals(areas, newArea));
    const removeArea = area.filter((areas: any) => !equals(areas, newArea));
    if (!areaFind) {
      setArea([...area, newArea]);
    } else {
      setArea(removeArea);
    }
  };
  const { mutate } = createContactColaborator();
  const handleSubmitContact = (values: any, action: any) => {
    const data = {
      [FORMVALUES.FIRSTNAME]: values.firstname,
      [FORMVALUES.LASTNAME]: values.lastname,
      [FORMVALUES.PHONE]: values.mobile,
      [FORMVALUES.EMAIL]: values.email,
      [FORMVALUES.COMPANY]: values.valueCompany,
      [FORMVALUES.MESSAGE]: values.message,
      [FORMVALUES.PARTOF]: 'teamMember',
      [FORMVALUES.SPECIALITY]: area,
      [FORMVALUES.CONDITIONS]: values.conditionsAccepted,
    };
    mutate(
      { data },
      {
        onSuccess: () => {
          action.resetForm();
        },
        onError: () => {
          action.resetForm();
        },
      },
    );
  };

  return (
    <>
      <Formik
        onSubmit={handleSubmitContact}
        initialValues={initialValues}
        validationSchema={validationSchemaColaborator}
        validateOnMount>
        {({ touched, errors, handleSubmit, values, setFieldValue }) => (
          <>
            <Styles.Form onSubmit={handleSubmit}>
              <Subtext size="lg:text-sm w-full pb-10 font-PrimarySerif">
                {translate.partOfTeam}
              </Subtext>
              <Styles.BlockSelect>
                {FORMPARTOF.map((valuesCheck) => (
                  <Styles.AlingSelect key={`Radio-${valuesCheck.value}`}>
                    <InputRadio
                      text={valuesCheck.text}
                      value={valuesCheck.value}
                      onChange={(e: any) => {
                        setFieldValue(FORMVALUES.PARTOF, e);
                        setFilter(e);
                      }}
                    />
                  </Styles.AlingSelect>
                ))}
              </Styles.BlockSelect>
              <Subtext size="lg:text-sm w-full pb-10 font-PrimarySerif pt-10">
                {translate.partOfTeam}
              </Subtext>
              <Styles.BlockSelectSecond>
                {Partner?.data.map((valuesCheck: any) => (
                  <Styles.AlingSelectSecond
                    key={`check-${valuesCheck.attributes.area}`}>
                    <InputCheck
                      text={valuesCheck.attributes.area}
                      value={valuesCheck.attributes.area}
                      onChange={() => {
                        addArea(valuesCheck.attributes.area);
                      }}
                    />
                  </Styles.AlingSelectSecond>
                ))}
              </Styles.BlockSelectSecond>
              <Styles.BlockInputsCenter>
                <Styles.BlockInput>
                  <Styles.Input
                    ismode={BUTTON_ACTIVE.ON}
                    placeholder={translate.formName}
                    type="text"
                    name={FORMVALUES.FIRSTNAME}
                  />
                  {touched.valueName && errors.valueName && (
                    <Styles.BlockClose
                      onClick={() => setFieldValue(valueName, '')}
                    />
                  )}
                </Styles.BlockInput>
                {touched.valueName && errors.valueName && (
                  <Styles.Error>{errors.valueName}</Styles.Error>
                )}

                <Styles.BlockInput>
                  <Styles.Input
                    ismode={BUTTON_ACTIVE.ON}
                    placeholder={translate.formLastName}
                    type="text"
                    name={FORMVALUES.LASTNAME}
                  />
                  {touched.valueLastName && errors.valueLastName && (
                    <Styles.BlockClose
                      onClick={() => setFieldValue(valueLastName, '')}
                    />
                  )}
                </Styles.BlockInput>
                {touched.valueName && errors.valueName && (
                  <Styles.Error>{errors.valueName}</Styles.Error>
                )}
              </Styles.BlockInputsCenter>
              <Styles.BlockInputsCenter>
                <Styles.BlockInput>
                  <Styles.Input
                    ismode={BUTTON_ACTIVE.ON}
                    placeholder={translate.formEmail}
                    type="email"
                    name={FORMVALUES.EMAIL}
                  />
                  {touched.valueEmail && errors.valueEmail && (
                    <Styles.BlockClose
                      onClick={() => setFieldValue(valueEmail, '')}
                    />
                  )}
                </Styles.BlockInput>
                {touched.valueEmail && errors.valueEmail && (
                  <Styles.Error>{errors.valueEmail}</Styles.Error>
                )}
                <Styles.BlockInput>
                  <Styles.Input
                    ismode={BUTTON_ACTIVE.OFF}
                    placeholder={translate.formPhone}
                    type="number"
                    name={FORMVALUES.PHONE}
                  />
                  {touched.valuePhone && errors.valuePhone && (
                    <Styles.BlockClose
                      onClick={() => setFieldValue(valuePhone, '')}
                    />
                  )}
                </Styles.BlockInput>
                {touched.valuePhone && errors.valuePhone && (
                  <Styles.Error>{errors.valuePhone}</Styles.Error>
                )}
              </Styles.BlockInputsCenter>

              {values[valuepartOf] === CONDITIONFORM.TEAM ? (
                <Styles.BlockInputEnd>
                  <Styles.BlockInputOnly>
                    <Styles.Input
                      ismode={BUTTON_ACTIVE.OFF}
                      placeholder={translate.formLink}
                      type="text"
                      name={FORMVALUES.LINK}
                    />
                  </Styles.BlockInputOnly>
                </Styles.BlockInputEnd>
              ) : (
                <Styles.BlockInputEnd>
                  <Styles.BlockInputOnly>
                    <Styles.Input
                      ismode={BUTTON_ACTIVE.OFF}
                      placeholder={translate.formCompany}
                      type="text"
                      name={FORMVALUES.COMPANY}
                    />
                  </Styles.BlockInputOnly>
                </Styles.BlockInputEnd>
              )}

              <Styles.BlockInputEnd>
                <Styles.BlockInputOnly>
                  <Styles.Input
                    ismode={BUTTON_ACTIVE.OFF}
                    placeholder={translate.formMessage}
                    type="textarea"
                    name={FORMVALUES.MESSAGE}
                  />
                  {touched.valueMessage && errors.valueMessage && (
                    <Styles.BlockClose
                      onClick={() => setFieldValue(valueMessage, '')}
                    />
                  )}
                  {touched.valueMessage && errors.valueMessage && (
                    <Styles.Error>{errors.valueMessage}</Styles.Error>
                  )}
                </Styles.BlockInputOnly>
              </Styles.BlockInputEnd>
              <InputCheckcondition
                color="text-primary text-xs pt-6"
                value={FORMVALUES.CONDITIONS}
                onClick={(e: any) => setFieldValue(check, e)}>
                <Conditions />
              </InputCheckcondition>
              {touched.check && errors.check && (
                <Styles.Error>{errors.check}</Styles.Error>
              )}
              <Styles.BlockSendButton>
                <Styles.BtnSend type="submit">
                  {translate.formSend}
                </Styles.BtnSend>
              </Styles.BlockSendButton>
            </Styles.Form>
          </>
        )}
      </Formik>
    </>
  );
}
