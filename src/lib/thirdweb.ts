import { createThirdwebClient } from "thirdweb";
import { ethereum, polygon } from "thirdweb/chains";

export const client = createThirdwebClient({
  clientId: "8feed16c603958bfdae682ddab71f9d1",
});

// Chains disponibles
export const supportedChains = [polygon, ethereum];

// Chain activa - POLYGON MAINNET para producción real
export const activeChain = polygon;