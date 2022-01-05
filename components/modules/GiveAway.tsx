import Input from 'components/atoms/forms/Input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { PaperAirplaneIcon } from '@heroicons/react/outline';

interface IFormValues {
  EMAIL: string;
}

const GiveAway = (): JSX.Element => {
  const schema = yup
    .object({
      EMAIL: yup.string().email().required(),
    })
    .required();

  const {
    register,
    formState: { isValid },
  } = useForm<IFormValues>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container lg:mx-auto px-4 lg:px-0 items-center lg:flex lg:grid lg:grid-cols-2 gap-12">
        <h3 className="font-bold text-3xl text-white mb-8 lg:md-0">
          Going it alone? Down our guide to understanding how to do your own
          bookkeeping.
        </h3>

        <div className="">
          <div>
            {/* Begin Mailchimp Signup Form */}

            <div id="mc_embed_signup">
              <form
                action="https://tinkaconsulting.us20.list-manage.com/subscribe/post?u=caa5f124ceac40e12386bfc67&id=64ee6441b5"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
                noValidate
              >
                <div id="mc_embed_signup_scroll">
                  <Input
                    placeholder={'Type your email'}
                    name="EMAIL"
                    type="email"
                    required={true}
                    register={register}
                    //error={errors.EMAIL?.message}
                  />
                  {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                  <div
                    style={{ position: 'absolute', left: '-5000px' }}
                    aria-hidden="true"
                  >
                    <input
                      type="text"
                      name="b_caa5f124ceac40e12386bfc67_64ee6441b5"
                      tabIndex={-1}
                    />
                  </div>
                </div>
                <button
                  disabled={!isValid}
                  type="submit"
                  className={`group transition-all border-orange-500 border-2 border-orange py-4 pl-8 inline-block text-white md:ml-auto ${
                    isValid
                      ? 'bg-orange pr-3 hover:pr-8'
                      : 'bg-transparent pr-8'
                  }`}
                >
                  <div className="flex item-center">
                    {isValid
                      ? 'Send me the guide'
                      : 'Enter your email to get our free guide'}
                    {isValid && (
                      <PaperAirplaneIcon className="transition-all w-6 h-6 opacity-0 group-hover:ml-5 group-hover:opacity-100" />
                    )}
                  </div>
                </button>
              </form>
            </div>
            {/*End mc_embed_signup*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiveAway;
