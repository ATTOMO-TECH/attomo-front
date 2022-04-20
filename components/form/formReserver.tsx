import { Formik } from 'formik';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Styles } from './style';
import { BUTTON_ACTIVE } from '../../const/const';
import { FORMVALUES } from '../../hook/types';
import InputSelect from './select';
import { OPTIONDISPONIBILITY } from '../../const/constGlobal';
import InputCheckcondition from './inputCheckcondition';
import { createReserve } from '../../domain/useContact';
import Conditions from './conditions';
import { getLocale } from '../../public/locales/getLocale';
import CalendarPickerInput from '../calendar/input/calendar';
import { validationSchemaBooking } from './validations';
import { servicesAnimations } from '../animations/animations';
import Title from '../Text/title';
import Subtext from '../Text/subText';

export default function FormReserver() {
  const translate = getLocale();
  const [shouldShowActions] = useState(false);
  const [sendSuccesfull, setSuccesfull] = useState<boolean>(false);
  const [selected, setSelected] = useState('');
  const onChange = (e: any) => {
    setSelected(e.value);
  };

  const valueDate = FORMVALUES.DATE;
  const valueTime = FORMVALUES.TIME;
  const valueName = FORMVALUES.FIRSTNAME;
  const valueLastName = FORMVALUES.LASTNAME;
  const valuePhone = FORMVALUES.PHONE;
  const valueEmail = FORMVALUES.EMAIL;
  const valueCompany = FORMVALUES.COMPANY;
  const check = FORMVALUES.CONDITIONS;

  const initialValues = {
    [valueName]: '',
    [valueLastName]: '',
    [valueCompany]: '',
    [valuePhone]: '',
    [valueEmail]: '',
    [valueDate]: '',
    [valueTime]: selected,
    [FORMVALUES.CONDITIONS]: false,
  };

  const { mutate } = createReserve();

  const handleSubmitReserve = (dataValues: any, action: any) => {
    const data = {
      [FORMVALUES.FIRSTNAME]: dataValues.firstname,
      [FORMVALUES.LASTNAME]: dataValues.lastname,
      [FORMVALUES.PHONE]: dataValues.mobile,
      [FORMVALUES.EMAIL]: dataValues.email,
      [FORMVALUES.COMPANY]: dataValues.company,
      [FORMVALUES.CONDITIONS]: dataValues.conditionsAccepted,
      [FORMVALUES.DATE]: dataValues.date,
      [FORMVALUES.TIME]: selected,
    };

    mutate(
      { data },
      {
        onSuccess: () => {
          action.resetForm();
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
        <>
          {translate.formBooking.map((values) => (
            <>
              <Title size=" lg:pt-36 w-full text-center pt-10 leading-relaxed lg:pr-10 lg:text-4xl pb-2 text-3xl ">
                {values.Text}
              </Title>
              <Subtext size=" text-center py-5  ">{values.Subtext}</Subtext>
            </>
          ))}
          <Formik
            onSubmit={handleSubmitReserve}
            initialValues={initialValues}
            validationSchema={validationSchemaBooking}
            validateOnMount>
            {({ touched, errors, handleSubmit, setFieldValue }) => (
              <>
                <Styles.Form onSubmit={handleSubmit}>
                  <Styles.SectionInputs>
                    <Styles.BlockInput>
                      <Styles.Input
                        ismode={BUTTON_ACTIVE.ON}
                        placeholder={translate.formName}
                        type="text"
                        name={FORMVALUES.FIRSTNAME}
                      />
                      {touched.firstname && errors.firstname && (
                        <Styles.BlockClose
                          onClick={() => setFieldValue(valueName, '')}
                        />
                      )}
                      {touched.firstname && errors.firstname && (
                        <Styles.Error>{errors.firstname}</Styles.Error>
                      )}
                    </Styles.BlockInput>
                    <Styles.BlockInput>
                      <Styles.Input
                        ismode={BUTTON_ACTIVE.OFF}
                        placeholder={translate.formLastName}
                        type="text"
                        name={FORMVALUES.LASTNAME}
                      />
                      {touched.lastname && errors.lastname && (
                        <Styles.BlockClose
                          onClick={() => setFieldValue(valueLastName, '')}
                        />
                      )}
                      {touched.lastname && errors.lastname && (
                        <Styles.Error>{errors.lastname}</Styles.Error>
                      )}
                    </Styles.BlockInput>
                  </Styles.SectionInputs>
                  <Styles.BlockInputsCenter>
                    <Styles.BlockInput>
                      <div className="pt-5 lg:pt-0">
                        <CalendarPickerInput
                          handleValue={(e: any) => {
                            setFieldValue(FORMVALUES.DATE, e);
                          }}
                        />
                      </div>
                    </Styles.BlockInput>
                    <Styles.BlockInput>
                      <div className="pt-5 lg:pt-0">
                        <InputSelect
                          selected={selected}
                          options={OPTIONDISPONIBILITY}
                          valueLabel={translate.formTime}
                          name={FORMVALUES.TIME}
                          onChange={onChange}
                        />
                      </div>
                    </Styles.BlockInput>
                  </Styles.BlockInputsCenter>
                  <Styles.BlockInputsCenter>
                    <Styles.BlockInput>
                      <Styles.Input
                        ismode={BUTTON_ACTIVE.ON}
                        placeholder={translate.formEmail}
                        type="email"
                        name={FORMVALUES.EMAIL}
                      />
                      {touched.email && errors.email && (
                        <Styles.BlockClose
                          onClick={() => setFieldValue(valueEmail, '')}
                        />
                      )}
                      {touched.email && errors.email && (
                        <Styles.Error>{errors.email}</Styles.Error>
                      )}
                    </Styles.BlockInput>

                    <Styles.BlockInput>
                      <Styles.Input
                        ismode={BUTTON_ACTIVE.ON}
                        placeholder={translate.formPhone}
                        type="number"
                        name={FORMVALUES.PHONE}
                      />
                      {touched.mobile && errors.mobile && (
                        <Styles.BlockClose
                          onClick={() => setFieldValue(valuePhone, '')}
                        />
                      )}
                      {touched.mobile && errors.mobile && (
                        <Styles.Error>{errors.mobile}</Styles.Error>
                      )}
                    </Styles.BlockInput>
                  </Styles.BlockInputsCenter>
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
                  <InputCheckcondition
                    color="text-primary text-xs pt-6"
                    value={FORMVALUES.CONDITIONS}
                    onClick={(e: any) => setFieldValue(check, e)}>
                    <Conditions />
                  </InputCheckcondition>
                  <span className="absolute w-2/6">
                    {touched.conditionsAccepted &&
                      errors.conditionsAccepted && (
                        <Styles.Error>{errors.conditionsAccepted}</Styles.Error>
                      )}
                  </span>

                  <Styles.BlockSendButton>
                    <Styles.BtnSend type="submit">
                      {translate.formRent}
                    </Styles.BtnSend>
                  </Styles.BlockSendButton>
                </Styles.Form>
              </>
            )}
          </Formik>
        </>
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
          <Title size=" lg:pt-36 w-full text-center pt-10 leading-relaxed lg:pr-10 lg:text-4xl pb-2 text-3xl ">
            Muchas gracias, hemos recibido tu solicitud de reserva. Pronto nos
            pondremos en contacto contigo
          </Title>
        </motion.div>
      )}
    </>
  );
}
