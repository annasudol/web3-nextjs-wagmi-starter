import { ConnectButton } from '@rainbow-me/rainbowkit';

import { ButtonRightIcon, MyButton } from '@/components/button/MyButton';

const MyConnectButton = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === 'authenticated');
        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <MyButton
                    onPress={openConnectModal}
                    type="button"
                    variant="bordered"
                    color="primary"
                    iconRight={ButtonRightIcon.Wallet}
                  >
                    Connect Wallet
                  </MyButton>
                );
              }
              if (chain.unsupported) {
                return (
                  <MyButton
                    onPress={openChainModal}
                    type="button"
                    variant="bordered"
                  >
                    Wrong network
                  </MyButton>
                );
              }
              return (
                <div style={{ display: 'flex', gap: 2 }}>
                  <button
                    onClick={openChainModal}
                    className="mr-2 flex items-center"
                  >
                    {chain.hasIcon && (
                      <div
                        className="flex items-center rounded-full"
                        style={{
                          background: chain.iconBackground,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                          />
                        )}
                      </div>
                    )}
                  </button>
                  <MyButton
                    onPress={openAccountModal}
                    type="button"
                    variant="bordered"
                    color="primary"
                  >
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ''}
                  </MyButton>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default MyConnectButton;
