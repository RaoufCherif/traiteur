import type {Config} from 'jest';

const Conf = async (): Promise<Config> => {
  return {
    verbose: true,
  };
};

export default Conf;