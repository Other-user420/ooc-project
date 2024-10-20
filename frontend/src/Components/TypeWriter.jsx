<TypeWriter
                options={{ loop: true, autoStart: true }}
                onInit={(writer) => {
                  const typeNextString = (index = 0) => {
                    writer
                      .typeString(messages[index])
                      .pauseFor(2500)
                      .deleteAll()
                      .callFunction(() => {
                        const nextIndex = (index + 1) ;
                        typeNextString(nextIndex);
                      })
                      .start();
                  };

                  typeNextString();
                }}
              />