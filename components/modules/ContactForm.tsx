import { useSiteSettings } from 'context/SiteSettings';
import { PaperAirplaneIcon } from '@heroicons/react/outline';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from 'components/atoms/forms/Input';
import { useRouter } from 'next/router';

const schema = yup
  .object({
    name: yup.string().required(),
    phone: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
  })
  .required();

interface IFormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm = (): JSX.Element => {
  const { offices } = useSiteSettings();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    resolver: yupResolver(schema),
  });

  const encode = (data) =>
    Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');

  const onSubmit = (data) => {
    const body = encode({
      'form-name': 'contact-us',
      ...data,
    });
    // eslint-disable-next-line no-console
    console.log('onSubmit', data, body);

    // https://docs.netlify.com/forms/setup/
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    })
      .then(() => router.push('/thank-you/'))
      .catch((_) => alert('Error'));
  };

  return (
    <section>
      <div className="container mx-auto flex grid lg:grid-cols-12 gap-8 py-20 lg:px-0 px-4">
        <div className="col-span-5 lg:col-start-2">
          {offices.map((office, index) => (
            <div
              key={index}
              className="mb-8"
              itemScope
              itemType="http://schema.org/LegalService"
            >
              <a href={office.map} target="_blank" rel="noreferrer">
                <h5 className="text-xl font-bold mb-4" itemProp="name">
                  TINKA {office.title}
                </h5>
              </a>
              <a href={`tel:${office.phone}`} itemProp="telephone">
                {office.phone}
              </a>
              <a href={office.map} target="_blank" rel="noreferrer">
                <p
                  style={{ whiteSpace: 'pre-line' }}
                  className="text-base"
                  itemProp="address"
                >{`${office.address}`}</p>
                <p>
                  <span itemProp="addressLocality">
                    {office.addressLocality}
                  </span>
                  , <span itemProp="addressRegion">{office.addressRegion}</span>
                  , <span itemProp="postalCode">{office.postalCode}</span>
                </p>
              </a>
            </div>
          ))}
        </div>

        <div className="relative h-full col-span-5">
          <form
            method="POST"
            netlify-honeypot="bot-field"
            data-netlify="true"
            name="contact-us"
            onSubmit={handleSubmit(onSubmit)}
            //onError={() => console.log('E', errors)}
            //onErrorCapture={() => console.log('E')}
          >
            <Input
              label={'Name'}
              placeholder={'Type your name'}
              name="name"
              required={true}
              register={register}
              error={errors.name?.message}
            />
            <Input
              label={'Email address'}
              placeholder={'Enter your email'}
              name="email"
              required={true}
              register={register}
              error={errors.email?.message}
            />
            <Input
              label={'Phone Number'}
              placeholder={'Enter your phone number'}
              name="phone"
              register={register}
              error={errors.phone?.message}
            />
            <Input
              required={true}
              label={'How can we help?'}
              placeholder={'Tell us how we can help you'}
              name="message"
              register={register}
              error={errors.message?.message}
            />

            <button
              type="submit"
              className="group transition-all border-orange-500 border-2 border-orange py-4 pl-8 pr-3 inline-block bg-orange text-white"
            >
              <div className="flex item-center">
                Send
                <PaperAirplaneIcon className="transition-all w-6 h-6 opacity-0 group-hover:ml-5 group-hover:opacity-100" />
              </div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export const ContactFormPreview = (): JSX.Element => <h1>Preview</h1>;

export default ContactForm;
