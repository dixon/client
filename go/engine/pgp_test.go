package engine

import (
	"github.com/keybase/client/go/libkb"
	"testing"
)

func TestGenerateNewPGPKey(t *testing.T) {
	tc := libkb.SetupTest(t, "pgp")
	defer tc.Cleanup()
	fu := CreateAndSignupFakeUser(t, "pgp")
	secui := libkb.TestSecretUI{fu.Passphrase}
	arg := PGPEngineArg{
		Gen: &libkb.PGPGenArg{
			PrimaryBits: 768,
			SubkeyBits:  768,
		},
	}
	arg.Gen.MakeAllIds()
	ctx := Context{
		LogUI:    G.UI.GetLogUI(),
		SecretUI: secui,
	}
	eng := NewPGPEngine(arg)
	err := RunEngine(eng, &ctx, nil, nil)
	if err != nil {
		t.Fatal(err)
	}
}
