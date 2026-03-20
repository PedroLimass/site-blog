import { createElement, useCallback, useMemo } from "react";
import { Check, Link } from "lucide-react";
import {
  ShareConfig,
  SOCIAL_PROVIDERS,
  SocialProvider,
} from "./social-providers";
import { useClipboard } from "../use-clipboard/use-clipboard";

type UseShareProps = ShareConfig & {
  clipboardTimeout?: number;
};

export const useShare = ({
  url,
  title = "",
  text = "",
  clipboardTimeout = 2000,
}: UseShareProps) => {
  const { isCopied, handleCopy } = useClipboard({ timeout: clipboardTimeout });
  const shareConfig = useMemo(
    () => ({
      url,
      ...(title && { title }),
      ...(text && { text }),
    }),
    [url, title, text]
  );

  const share = useCallback(
    async (provider: SocialProvider) => {
      try {
        if (provider === "clipboard") {
          return await handleCopy(url);
        }

        const providerConfig = SOCIAL_PROVIDERS[provider];
        if (!providerConfig) {
          throw new Error(`Provider não suportado: ${provider}`);
        }

        const shareUrl = providerConfig.shareUrl(shareConfig);
        const shareWindow = window.open(
          shareUrl,
          "_blank",
          "width=600, height=600, location=yes, status=yes"
        );

        return !!shareWindow;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    [shareConfig, handleCopy, url]
  );

  const shareButtons = useMemo(
    () => [
      ...Object.entries(SOCIAL_PROVIDERS).map(([key, provider]) => ({
        provider: key,
        name: provider.name,
        icon: provider.icon,
        action: () => share(key as SocialProvider),
      })),
      {
        provider: "clipboard",
        name: "Copiar",
        icon: createElement(
          "span",
          { className: "relative block h-4 w-4" },
          createElement(Check, {
            className: `absolute inset-0 h-4 w-4 transform transition-all duration-300 ${
              isCopied
                ? "scale-100 rotate-0 opacity-100"
                : "scale-75 -rotate-45 opacity-0"
            }`,
          }),
          createElement(Link, {
            className: `absolute inset-0 h-4 w-4 transform transition-all duration-300 ${
              isCopied
                ? "scale-75 rotate-45 opacity-0"
                : "scale-100 rotate-0 opacity-100"
            }`,
          })
        ),
        action: () => share("clipboard"),
      },
    ],
    [share, isCopied]
  );

  return { shareButtons };
};
