import { Formik } from 'formik';
import { Styles } from './style';
import { BUTTON_ACTIVE } from '../../const/const';
import { FORMVALUES } from '../../hook/types';
import InputCheckcondition from './inputCheckcondition';
import { validationSchemaContact } from './validations';
import { createContact } from '../../domain/useContact';
import Conditions from './conditions';
import { getLocale } from '../../public/locales/getLocale';

export default function FormCustomer() {
  const translate = getLocale();
  const valueName = FORMVALUES.FIRSTNAME;
  const valueLastName = FORMVALUES.LASTNAME;
  const valuePhone = FORMVALUES.PHONE;
  const valueEmail = FORMVALUES.EMAIL;
  const valueCompany = FORMVALUES.COMPANY;
  const valueMessage = FORMVALUES.MESSAGE;
  const check = FORMVALUES.CONDITIONS;

  const initialValues = {
    [FORMVALUES.FIRSTNAME]: '',
    [FORMVALUES.LASTNAME]: '',
    [FORMVALUES.PHONE]: '',
    [FORMVALUES.EMAIL]: '',
    [FORMVALUES.COMPANY]: '',
    [FORMVALUES.MESSAGE]: '',
    [FORMVALUES.CONDITIONS]: false,
  };
  const { mutate } = createContact();
  const handleSubmit = (values: any, action: any) => {
    const data = {
      [FORMVALUES.FIRSTNAME]: values.firstname,
      [FORMVALUES.LASTNAME]: values.lastname,
      [FORMVALUES.PHONE]: values.mobile,
      [FORMVALUES.EMAIL]: values.email,
      [FORMVALUES.COMPANY]: values.valueCompany,
      [FORMVALUES.MESSAGE]: values.message,
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
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchemaContact}
        validateOnMount>
        {({ touched, errors, setFieldValue }) => (
          <>
            <Styles.Form>
              <Styles.SectionInput>
                <Styles.BlockSections>
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
                </Styles.BlockSections>

                <Styles.SubBlock>
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
                  {touched.valueLastName && errors.valueLastName && (
                    <Styles.Error>{errors.valueLastName}</Styles.Error>
                  )}
                </Styles.SubBlock>
              </Styles.SectionInput>
              <Styles.SectionInput>
                <Styles.BlockSectionMargin>
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
                </Styles.BlockSectionMargin>

                <Styles.BlockSectionMarginTop>
                  <Styles.BlockInput>
                    <Styles.Input
                      ismode={BUTTON_ACTIVE.ON}
                      placeholder={translate.formPhone}
                      type="phone"
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
                </Styles.BlockSectionMarginTop>
              </Styles.SectionInput>
              <Styles.SingleInput>
                <Styles.BlockSectionMarginTop>
                  <Styles.Input
                    ismode={BUTTON_ACTIVE.OFF}
                    placeholder={translate.formCompany}
                    type="text"
                    name={valueCompany}
                  />
                </Styles.BlockSectionMarginTop>
              </Styles.SingleInput>
              <Styles.SingleInput>
                <Styles.BlockSectionMarginTop>
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
                </Styles.BlockSectionMarginTop>
              </Styles.SingleInput>
              <InputCheckcondition
                color="text-primary text-xs md:pt-6 pt-4"
                value={FORMVALUES.CONDITIONS}
                onChange={(e: any) => setFieldValue(check, e)}>
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
