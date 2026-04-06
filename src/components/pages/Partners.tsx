import { Link } from "@/lib/router";
import { Button } from "@/components/ui/button";
import { getImageSrc } from "@/lib/utils";
import acquiaLogo from "@/assets/partners/acquia.png";
import adobeLogo from "@/assets/partners/adobe.jpg";
import apcLogo from "@/assets/partners/apc.jpg";
import armisLogo from "@/assets/partners/armis.jpg";
import veeamLogo from "@/assets/partners/veeam.png";
import woltersKluwerLogo from "@/assets/partners/wolters-kluwer.png";
import promarkLogo from "@/assets/partners/promark.jpg";
import juniperLogo from "@/assets/partners/juniper.png";
import arubaLogo from "@/assets/partners/aruba.jpg";
import omnissaLogo from "@/assets/partners/omnissa.jpg";
import oracleLogo from "@/assets/partners/oracle.jpg";
import paloaltoLogo from "@/assets/partners/paloalto.jpg";
import portswiggerLogo from "@/assets/partners/portswigger.jpg";
import proofpointLogo from "@/assets/partners/proofpoint.jpg";
import pureStorageLogo from "@/assets/partners/pure-storage.jpg";
import qumuloLogo from "@/assets/partners/qumulo.jpg";
import kaiburrLogo from "@/assets/partners/kaiburr.jpg";
import keeperLogo from "@/assets/partners/keeper.jpg";
import keepitLogo from "@/assets/partners/keepit.jpg";
import kioxiaLogo from "@/assets/partners/kioxia.jpg";
import kognitosLogo from "@/assets/partners/kognitos.jpg";
import lenovoLogo from "@/assets/partners/lenovo.jpg";
import microsoftLogo from "@/assets/partners/microsoft.jpg";
import neatLogo from "@/assets/partners/neat.jpg";
import netappLogo from "@/assets/partners/netapp.jpg";
import netskopeLogo from "@/assets/partners/netskope.jpg";
import nutanixLogo from "@/assets/partners/nutanix.jpg";
import oktaLogo from "@/assets/partners/okta.jpg";
import infinidat from "@/assets/partners/infinidat.jpg";
import blanccoLogo from "@/assets/partners/blancco.jpg";
import carahsoftLogo from "@/assets/partners/carahsoft.jpg";
import ninjaoneLogo from "@/assets/partners/ninjaone.svg";
import ingramMicroLogo from "@/assets/partners/ingram-micro.jpg";
import balataLogo from "@/assets/partners/balata.jpg";
import cohesityLogo from "@/assets/partners/cohesity.jpg";
import colortokensLogo from "@/assets/partners/colortokens.jpg";
import commscopeLogo from "@/assets/partners/commscope.jpg";
import commvaultLogo from "@/assets/partners/commvault.png";
import crowdstrikeLogo from "@/assets/partners/crowdstrike.jpg";
import d8taopsLogo from "@/assets/partners/d8taops.png";
import dellLogo from "@/assets/partners/dell.jpg";
import checkpointLogo from "@/assets/partners/checkpoint.jpg";
import ciscoLogo from "@/assets/partners/cisco.jpg";
import cloudsodaLogo from "@/assets/partners/cloudsoda.jpg";
import druvaLogo from "@/assets/partners/druva.jpg";
import eatonLogo from "@/assets/partners/eaton.jpg";
import endorLabsLogo from "@/assets/partners/endor-labs.jpg";
import epsLogo from "@/assets/partners/eps.jpg";
import f5Logo from "@/assets/partners/f5.jpg";
import fortinetLogo from "@/assets/partners/fortinet.jpg";
import googleCloudLogo from "@/assets/partners/google-cloud.jpg";
import granicusLogo from "@/assets/partners/granicus.jpg";
import hitachiLogo from "@/assets/partners/hitachi.jpg";
import hpeJuniperLogo from "@/assets/partners/hpe-juniper.jpg";
import hpeLogo from "@/assets/partners/hpe.jpg";
import hpLogo from "@/assets/partners/hp.png";
import ibmLogo from "@/assets/partners/ibm.jpg";
import illusiveLogo from "@/assets/partners/illusive.jpg";
import infobloxLogo from "@/assets/partners/infoblox.jpg";
import arcticWolfLogo from "@/assets/partners/arctic-wolf.jpg";
import aristaLogo from "@/assets/partners/arista.jpg";

const LOGO_DEV_TOKEN = "pk_eeEmTlKkT0OvWJR0VXYTKA";

const getLogoUrl = (domain: string) =>
  `https://img.logo.dev/${domain}?token=${LOGO_DEV_TOKEN}`;

const Partners = () => {
  const partners = [
    { name: "Acquia", domain: "acquia.com", logo: acquiaLogo },
    { name: "Adobe", domain: "adobe.com", logo: adobeLogo },
    { name: "APC", domain: "apc.com", logo: apcLogo },
    { name: "Arctic Wolf", domain: "arcticwolf.com", logo: arcticWolfLogo },
    { name: "Arista", domain: "arista.com", logo: aristaLogo },
    { name: "Armis", domain: "armis.com", logo: armisLogo },
    { name: "Aruba Networks", domain: "arubanetworks.com", logo: arubaLogo },
    { name: "AWS", domain: "aws.amazon.com" },
    { name: "Microsoft Azure", domain: "azure.microsoft.com" },
    { name: "Balata", domain: "balata.io", logo: balataLogo },
    { name: "Blancco", domain: "blancco.com", logo: blanccoLogo },
    { name: "Check Point", domain: "checkpoint.com", logo: checkpointLogo },
    { name: "Carahsoft", domain: "carahsoft.com", logo: carahsoftLogo },
    { name: "Cisco", domain: "cisco.com", logo: ciscoLogo },
    { name: "CloudSoda", domain: "cloudsoda.io", logo: cloudsodaLogo },
    { name: "Cohesity", domain: "cohesity.com", logo: cohesityLogo },
    { name: "ColorTokens", domain: "colortokens.com", logo: colortokensLogo },
    { name: "CommScope", domain: "commscope.com", logo: commscopeLogo },
    { name: "Commvault", domain: "commvault.com", logo: commvaultLogo },
    { name: "CrowdStrike", domain: "crowdstrike.com", logo: crowdstrikeLogo },
    { name: "D8taOps", domain: "d8taops.com", logo: d8taopsLogo },
    { name: "Datadog", domain: "datadoghq.com" },
    { name: "Dell", domain: "dell.com", logo: dellLogo },
    { name: "Druva", domain: "druva.com", logo: druvaLogo },
    { name: "Eaton", domain: "eaton.com", logo: eatonLogo },
    { name: "Endor Labs", domain: "endorlabs.com", logo: endorLabsLogo },
    { name: "EPS", domain: "eps.net", logo: epsLogo },
    { name: "F5", domain: "f5.com", logo: f5Logo },
    { name: "Fortinet", domain: "fortinet.com", logo: fortinetLogo },
    { name: "Google Cloud", domain: "cloud.google.com", logo: googleCloudLogo },
    { name: "Granicus", domain: "granicus.com", logo: granicusLogo },
    { name: "HP", domain: "hp.com", logo: hpLogo },
    { name: "HPE", domain: "hpe.com", logo: hpeLogo },
    { name: "HPE Juniper Networking", domain: "juniper.net", logo: hpeJuniperLogo },
    { name: "Hitachi Vantara", domain: "hitachivantara.com", logo: hitachiLogo },
    { name: "IBM", domain: "ibm.com", logo: ibmLogo },
    { name: "Illusive", domain: "intl.illusivenetworks.com", logo: illusiveLogo },
    { name: "Infinidat", domain: "infinidat.com", logo: infinidat },
    { name: "Infoblox", domain: "infoblox.com", logo: infobloxLogo },
    { name: "Ingram Micro", domain: "ingrammicro.com", logo: ingramMicroLogo },
    { name: "Juniper Networks", domain: "juniper.net", logo: juniperLogo },
    { name: "Kaiburr", domain: "kaiburr.com", logo: kaiburrLogo },
    { name: "Keeper", domain: "keepersecurity.com", logo: keeperLogo },
    { name: "Keepit", domain: "keepit.com", logo: keepitLogo },
    { name: "Kioxia", domain: "kioxia.com", logo: kioxiaLogo },
    { name: "Kognitos", domain: "kognitos.com", logo: kognitosLogo },
    { name: "Lenovo", domain: "lenovo.com", logo: lenovoLogo },
    { name: "Linewize", domain: "linewize.com" },
    { name: "Microsoft", domain: "microsoft.com", logo: microsoftLogo },
    { name: "Neat", domain: "neat.no", logo: neatLogo },
    { name: "NetApp", domain: "netapp.com", logo: netappLogo },
    { name: "Netskope", domain: "netskope.com", logo: netskopeLogo },
    { name: "NinjaOne", domain: "ninjaone.com", logo: ninjaoneLogo },
    { name: "Nutanix", domain: "nutanix.com", logo: nutanixLogo },
    { name: "Okta", domain: "okta.com", logo: oktaLogo },
    { name: "Omnissa", domain: "omnissa.com", logo: omnissaLogo },
    { name: "Oracle", domain: "oracle.com", logo: oracleLogo },
    { name: "Palo Alto Networks", domain: "paloaltonetworks.com", logo: paloaltoLogo },
    { name: "PortSwigger", domain: "portswigger.net", logo: portswiggerLogo },
    { name: "Promark Telecon", domain: "promarktelecon.com", logo: promarkLogo },
    { name: "Proofpoint", domain: "proofpoint.com", logo: proofpointLogo },
    { name: "Pure Storage", domain: "purestorage.com", logo: pureStorageLogo },
    { name: "Qumulo", domain: "qumulo.com", logo: qumuloLogo },
    { name: "Red Hat", domain: "redhat.com" },
    { name: "Rubrik", domain: "rubrik.com" },
    { name: "RSA", domain: "rsa.com" },
    { name: "Samsung", domain: "samsung.com" },
    { name: "Schneider Electric", domain: "se.com" },
    { name: "Semperis", domain: "semperis.com" },
    { name: "SentinelOne", domain: "sentinelone.com" },
    { name: "Snowflake", domain: "snowflake.com" },
    { name: "Sophos", domain: "sophos.com" },
    { name: "Spectra Logic", domain: "spectralogic.com" },
    { name: "Speedcast", domain: "speedcast.com" },
    { name: "StorOne", domain: "stor.one" },
    { name: "SpyCloud", domain: "spycloud.com" },
    { name: "TD Synnex", domain: "tdsynnex.com" },
    { name: "Teleport", domain: "goteleport.com" },
    { name: "VAST Data", domain: "vastdata.com" },
    { name: "Veeam", domain: "veeam.com", logo: veeamLogo },
    { name: "Vertiv", domain: "vertiv.com" },
    { name: "Wolters Kluwer", domain: "wolterskluwer.com", logo: woltersKluwerLogo },
    { name: "Zebra", domain: "zebra.com" },
    { name: "Zscaler", domain: "zscaler.com" },
  ];

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="pt-40 pb-16 bg-gradient-to-br from-background via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading mb-6">
              Our Partners 
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              We work with technology partners who share our values of transparency, reliability, and real-world performance.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Logo Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
            {partners.map((partner, index) => (
              <a
                key={index}
                href={`https://${partner.domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card rounded-lg p-4 flex items-center justify-center aspect-square shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <img
                  src={getImageSrc(partner.logo) || getLogoUrl(partner.domain)}
                  alt={`${partner.name} logo`}
                  loading="lazy"
                  width={120}
                  height={120}
                  className="max-w-full max-h-full object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading text-secondary-foreground mb-6">
            Partner With Zinfinity
          </h2>
          <p className="text-xl text-secondary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's talk about how our partnerships can help simplify your tech stack.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

    </div>
  );
};

export default Partners;
