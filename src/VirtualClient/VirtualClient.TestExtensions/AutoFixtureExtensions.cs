// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

namespace VirtualClient.TestExtensions
{
    using System.Diagnostics.CodeAnalysis;
    using System.IO;
    using System.Reflection;
    using System.Security;
    using System.Security.Cryptography.X509Certificates;
    using AutoFixture;

    /// <summary>
    /// Extension methods for <see cref="Fixture"/> instances and for general
    /// testing classes.
    /// </summary>
    /// <remarks>
    /// The <see cref="Fixture"/> class is part of a library called Autofixture
    /// which is used to help ease the creation of mock objects that are commonly 
    /// used in VirtualClient.TestExtensions project tests (e.g. unit, functional).
    /// 
    /// Source Code:
    /// https://github.com/AutoFixture/AutoFixture"
    /// 
    /// Cheat Sheet:
    /// https://github.com/AutoFixture/AutoFixture/wiki/Cheat-Sheet
    /// 
    /// </remarks>
    public static class AutoFixtureExtensions
    {
        private static Assembly thisAssembly = Assembly.GetAssembly(typeof(AutoFixtureExtensions));

        /// <summary>
        /// Registers a factory method with the <see cref="Fixture"/> provided that
        /// can be used to create a mock <see cref="X509Certificate2"/> instances.
        /// </summary>
        /// <param name="fixture">The test/auto fixture.</param>
        public static Fixture SetupCertificateMocks(this Fixture fixture)
        {
            fixture.Register<X509Certificate2>(() => AutoFixtureExtensions.CreateCertificate(withPrivateKey: true));

            return fixture;
        }

        /// <summary>
        /// Returns a mock/test <see cref="X509Certificate2"/> instance.
        /// </summary>
        /// <returns>
        /// A mock/test certificate.
        /// </returns>
        [SuppressMessage("Microsoft.Reliability", "CA2000:Dispose objects before losing scope", Justification = "The certificate password parameter cannot be disposed in this context.")]
        private static X509Certificate2 CreateCertificate(bool withPrivateKey = false)
        {
            X509Certificate2 certificate = null;
            string resourcesDirectory = Path.Combine(Path.GetDirectoryName(AutoFixtureExtensions.thisAssembly.Location), "Resources");

            if (withPrivateKey)
            {
                certificate = new X509Certificate2(
                    File.ReadAllBytes(Path.Combine(resourcesDirectory, "testcertificate.private")),
                    AutoFixtureExtensions.CertificatePass(),
                    X509KeyStorageFlags.Exportable | X509KeyStorageFlags.PersistKeySet);
            }
            else
            {
                certificate = new X509Certificate2(
                    File.ReadAllBytes(Path.Combine(resourcesDirectory, "testcertificate.private")));
            }

            return certificate;
        }

        /// <summary>
        /// Returns the "secret" word for the test PFX certificate.  Note that this certificate is used
        /// nowhere other than for testing.  It can be used to do nothing at all. In order to verify certain
        /// certificate operations, the full PFX is required containing the private key. In order to export the
        /// certificate with the private key the "secret" word is required.
        /// </summary>
        /// <returns></returns>
        private static SecureString CertificatePass()
        {
            byte[] wordChars = new byte[] { 115, 101, 99, 114, 101, 116 };
            SecureString word = new SecureString();
            foreach (byte wordChar in wordChars)
            {
                word.AppendChar((char)wordChar);
            }

            return word;
        }
    }
}
