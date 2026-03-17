import Section from "../section";

const About = () => {
  return (
    <Section title="A bit more about me" highlight="me" className="sm:text-left text-center">
      <p className="text-zinc-700 leading-relaxed">
        I <span className="font-semibold text-zinc-800">build products</span>,
        not just features. I take{" "}
        <span className="font-semibold">ownership end to end</span>, enjoy
        solving <span className="text-zinc-600 italic">real problems</span>, and
        care about writing{" "}
        <span className="font-accent text-xl">clean, scalable code</span> that
        holds up in production.
      </p>

      <p className="text-zinc-700 leading-relaxed">
        I work{" "}
        <span className="font-semibold text-zinc-800">across the stack</span>,
        integrating APIs and solving complex problems while{" "}
        <span className="font-semibold">collaborating closely with teams</span>{" "}
        to <span className="font-accent text-xl">ship products</span> that
        actually matter.
      </p>
    </Section>
  );
};

export default About;
