import IconAnimate from '../../button/icon';

export default function DetailsCases() {
  return (
    <>
      <section className="h-auto flex flex-wrap justify-between py-24">
        <div className="w-3/12 leading-relaxed">
          <div className="pb-5">
            <h5 className="font-Primary text-addictional text-xl">
              Disciplinas
            </h5>
            <h6 className="font-PrimarySerif font-thin text-sm">
              Transitional Branding
            </h6>
          </div>

          <div>
            <h5>Disciplinas</h5>
            <h6>Transitional Branding</h6>
          </div>
        </div>
        <div className="w-5/12 leading-relaxed font-PrimarySerif font-thin text-sm">
          <p>
            Presentación del caso - Nisi, donec et metus, suscipit. Mauris
            potenti nibh netus tellus. Amet, purus ultricies porttitor
            suspendisse leo sit sit. Consectetur cras donec at nisl. Vulputate
            volutpat non neque et amet vitae aliquet lacus, elementum.
          </p>
          <IconAnimate text="Ver online" />
        </div>
      </section>
    </>
  );
}
