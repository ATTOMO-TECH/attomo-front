import { Formik } from 'formik';
import * as qs from 'qs';
import { equals } from 'ramda';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Styles } from './style';
import { BUTTON_ACTIVE } from '../../const/const';
import { FORMVALUES } from '../../hook/types';
import Subtext from '../Text/subText';
import InputRadio from './inputRadio';
import { CONDITIONFORM, FORMPARTOF } from '../../const/constGlobal';
import InputCheck from './inputCheck';
import InputCheckcondition from './inputCheckcondition';
import { createContactColaborator } from '../../domain/useContact';
import Conditions from './conditions';
import { useUseAllPartner } from '../../domain/usePartners';
import { getLocale } from '../../public/locales/getLocale';
import { servicesAnimations } from '../animations/animations';
import Title from '../Text/title';
import { validationSchemaColaborator } from './validations';
import { handleFocus } from '../../hook/eventListener';

export default function FormColaborator() {
  const [shouldShowActions] = useState(false);
  const [sendSuccesfull, setSuccesfull] = useState<boolean>(false);
  const translate = getLocale();
  const [query, setQuery] = useState('');
  const [area, setArea] = useState<any>([]);
  const [filter, setFilter] = useState('team');

  const queryQs = qs.stringify(
    {
      filters: {
        teamOrPartner: {
          $eq: filter,
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
      [FORMVALUES.COMPANY]: values.company,
      [FORMVALUES.MESSAGE]: values.message,
      [FORMVALUES.LINK]: values.portfolio,
      [FORMVALUES.PARTOF]: values.teamOrPartner,
      [FORMVALUES.SPECIALITY]: area,
      [FORMVALUES.CONDITIONS]: values.conditionsAccepted,
    };

    mutate(
      { data },
      {
        onSuccess: () => {
          setSuccesfull(true);
        },
        onError: () => {
          action.resetForm();
        },
      },
    );
  };

  return (
    <>
      {!sendSuccesfull ? (
        <Formik
          onSubmit={handleSubmitContact}
          initialValues={initialValues}
          validationSchema={validationSchemaColaborator}
          validateOnMount>
          {({
            touched,
            errors,
            handleSubmit,
            values,
            setFieldValue,
            isValid,
            dirty,
          }) => (
            <>
              <Styles.Form onSubmit={handleSubmit} key="formColaborator">
                <Subtext size="lg:text-sm w-full pb-10 font-PrimarySerif">
                  {translate.partOfTeam}
                </Subtext>
                <Styles.BlockSelect>
                  {FORMPARTOF.map((valuesCheck) => (
                    <Styles.AlingSelect key={`Radio-${valuesCheck.value}`}>
                      <InputRadio
                        text={valuesCheck.text}
                        value={valuesCheck.value}
                        valueChecked={filter}
                        onChange={(e: any) => {
                          setFieldValue(FORMVALUES.PARTOF, e);
                          setFilter(e);
                        }}
                      />
                    </Styles.AlingSelect>
                  ))}
                </Styles.BlockSelect>
                <Subtext size="lg:text-sm w-full lg:pb-10 pb-4 font-PrimarySerif pt-10">
                  {translate.speciality}
                </Subtext>
                <Styles.BlockSelectSecond>
                  {Partner?.data.map((valuesCheck: any) => (
                    <Styles.AlingSelectSecond
                      key={`check-${valuesCheck.attributes.area}`}>
                      <InputCheck
                        text={valuesCheck.attributes.area}
                        value={valuesCheck.attributes.area}
                        onChange={() => {
                          addArea(valuesCheck.id);
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
                      id={FORMVALUES.FIRSTNAME}
                      name={FORMVALUES.FIRSTNAME}
                      onTouchStart={() => handleFocus(FORMVALUES.FIRSTNAME)}
                    />
                    {touched.firstname && errors.firstname && (
                      <Styles.BlockClose
                        onClick={() => setFieldValue(valueName, '')}
                        onTouchStart={() => setFieldValue(valueName, '')}
                      />
                    )}
                    {touched.firstname && errors.firstname && (
                      <Styles.Error>{errors.firstname}</Styles.Error>
                    )}
                  </Styles.BlockInput>
                  <Styles.BlockInput>
                    <Styles.Input
                      ismode={BUTTON_ACTIVE.ON}
                      placeholder={translate.formLastName}
                      id={FORMVALUES.LASTNAME}
                      type="text"
                      name={FORMVALUES.LASTNAME}
                      onTouchStart={() => handleFocus(FORMVALUES.LASTNAME)}
                    />
                    {touched.lastname && errors.lastname && (
                      <Styles.BlockClose
                        onClick={() => setFieldValue(valueLastName, '')}
                        onTouchStart={() => setFieldValue(valueLastName, '')}
                      />
                    )}
                    {touched.lastname && errors.lastname && (
                      <Styles.Error>{errors.lastname}</Styles.Error>
                    )}
                  </Styles.BlockInput>
                </Styles.BlockInputsCenter>
                <Styles.BlockInputsCenter>
                  <Styles.BlockInput>
                    <Styles.Input
                      ismode={BUTTON_ACTIVE.ON}
                      placeholder={translate.formEmail}
                      id={FORMVALUES.EMAIL}
                      type="email"
                      name={FORMVALUES.EMAIL}
                      onTouchStart={() => handleFocus(FORMVALUES.EMAIL)}
                    />
                    {touched.email && errors.email && (
                      <Styles.BlockClose
                        onClick={() => setFieldValue(valueEmail, '')}
                        onTouchStart={() => setFieldValue(valueEmail, '')}
                      />
                    )}
                    {touched.email && errors.email && (
                      <Styles.Error>{errors.email}</Styles.Error>
                    )}
                  </Styles.BlockInput>
                  <Styles.BlockInput>
                    <Styles.Input
                      ismode={BUTTON_ACTIVE.OFF}
                      placeholder={translate.formPhone}
                      id={FORMVALUES.PHONE}
                      type="number"
                      name={FORMVALUES.PHONE}
                      onTouchStart={() => handleFocus(FORMVALUES.PHONE)}
                    />
                    {touched.mobile && errors.mobile && (
                      <Styles.BlockClose
                        onClick={() => setFieldValue(valuePhone, '')}
                        onTouchStart={() => setFieldValue(valuePhone, '')}
                      />
                    )}
                    {touched.mobile && errors.mobile && (
                      <Styles.Error>{errors.mobile}</Styles.Error>
                    )}
                  </Styles.BlockInput>
                </Styles.BlockInputsCenter>

                {values[valuepartOf] === CONDITIONFORM.TEAM ? (
                  <Styles.BlockInputEnd>
                    <Styles.BlockInputOnly>
                      <Styles.Input
                        ismode={BUTTON_ACTIVE.OFF}
                        placeholder={translate.formLink}
                        id={FORMVALUES.LINK}
                        type="url"
                        pattern="https://.*"
                        name={FORMVALUES.LINK}
                        onTouchStart={() => handleFocus(FORMVALUES.LINK)}
                      />
                    </Styles.BlockInputOnly>
                  </Styles.BlockInputEnd>
                ) : (
                  <Styles.BlockInputEnd>
                    <Styles.BlockInputOnly>
                      <Styles.Input
                        ismode={BUTTON_ACTIVE.OFF}
                        placeholder={translate.formCompany}
                        id={FORMVALUES.COMPANY}
                        type="text"
                        name={FORMVALUES.COMPANY}
                        onTouchStart={() => handleFocus(FORMVALUES.COMPANY)}
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
                      id={FORMVALUES.MESSAGE}
                      name={FORMVALUES.MESSAGE}
                      onTouchStart={() => handleFocus(FORMVALUES.MESSAGE)}
                    />
                    {touched.message && errors.message && (
                      <Styles.BlockClose
                        onClick={() => setFieldValue(valueMessage, '')}
                        onTouchStart={() => setFieldValue(valueMessage, '')}
                      />
                    )}
                    {touched.message && errors.message && (
                      <Styles.Error>{errors.message}</Styles.Error>
                    )}
                  </Styles.BlockInputOnly>
                </Styles.BlockInputEnd>
                <InputCheckcondition
                  color="text-primary text-xs pt-6"
                  value={FORMVALUES.CONDITIONS}
                  onClick={(e: any) => setFieldValue(FORMVALUES.CONDITIONS, e)}
                  onTouched={(e: any) =>
                    setFieldValue(FORMVALUES.CONDITIONS, e)
                  }>
                  <Conditions />
                </InputCheckcondition>
                <span className="absolute w-2/6">
                  {touched.conditionsAccepted && errors.conditionsAccepted && (
                    <Styles.Error>{errors.conditionsAccepted}</Styles.Error>
                  )}
                </span>
                <Styles.BlockSendButton>
                  <Styles.BtnSend
                    onTouchStart={handleSubmit}
                    onClick={handleSubmit}
                    ismode={
                      !(isValid && dirty) ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF
                    }>
                    {translate.formSend}
                  </Styles.BtnSend>
                </Styles.BlockSendButton>
              </Styles.Form>
            </>
          )}
        </Formik>
      ) : (
        <motion.div
          animate={shouldShowActions}
          variants={servicesAnimations}
          className="actions"
          transition={{
            type: 'magic',
            stiffness: 100,
            duration: 0.5,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: '50%' }}>
          <Title size=" lg:py-36 w-full text-center pt-10 leading-relaxed lg:pr-10 lg:text-4xl pb-2 text-3xl lg:w-2/6  m-auto ">
            Datos enviados correctamente
          </Title>
        </motion.div>
      )}
    </>
  );
}
