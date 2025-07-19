import { useRecoilState } from 'recoil';
import { emailAtom } from '../state/emailatom';

export default function Hero() {
  const [email, setEmail] = useRecoilState(emailAtom);

  return (
    <section className="bg-black text-white py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Powerful Landing Pages That Convert
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Launch high-converting landing pages faster, generate qualified leads, and optimize your marketing efforts—all with one simple solution.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Work email"
            className="px-4 py-3 rounded-lg text-black w-full sm:w-auto"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="bg-lime-300 text-black font-semibold px-6 py-3 rounded-lg hover:bg-lime-400 transition">
            Start my trial →
          </button>
        </div>
      </div>
    </section>
  );
}
